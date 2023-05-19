package com.bookstore.controller;

import com.bookstore.entity.User;
import com.bookstore.entity.UserAuth;
import com.bookstore.service.TimerService;
import com.bookstore.service.UserService;
import com.bookstore.utils.messageUtils.Message;
import com.bookstore.utils.messageUtils.MessageUtil;
import com.bookstore.utils.sessionUtils.SessionUtil;
import net.sf.json.JSONObject;
import org.apache.commons.lang.time.StopWatch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@Scope("session")
public class LoginController {

    final UserService userService;

    @Autowired
    TimerService timerService;

    private StopWatch watch;

    @Autowired
    LoginController(UserService userService) {
        this.userService = userService;
    }
    // 【标在构造器上】：如果组件只有一个有参构造器，这个有参构造器的@Autowired可以省略，参数位置的组件还是可以自动从容器中获取；构造器要用的组件，都是从容器中获取

    @RequestMapping("/login")
    public Message login(@RequestBody Map<String, String> params) {
        System.out.println("--- login ---");
        String username = params.get("username");
        String userPassword = params.get("userPassword");
        UserAuth userAuth = userService.checkAuth(username, userPassword);
        System.out.println("login Auth:"+ userAuth);
        if (userAuth != null) {
            User nowUser=userService.getUserById(userAuth.getUserId());
            if(nowUser.getEnabled()==false)
            {
                return MessageUtil.createMessage(MessageUtil.LOGIN_ERROR_CODE, MessageUtil.LOGIN_BAN_MSG);
            }
            timerService.startTimer();
//            watch = new StopWatch();
//            watch.start();
            JSONObject newSession = new JSONObject();
            newSession.put("userId", userAuth.getUserId());
            newSession.put("username", userAuth.getUsername());
            newSession.put("userType", userAuth.getUserType());
            SessionUtil.setSession(newSession);

            JSONObject responseData = JSONObject.fromObject(userAuth);
            responseData.remove("userPassword");

            return MessageUtil.createMessage(MessageUtil.LOGIN_SUCCESS_CODE, MessageUtil.LOGIN_SUCCESS_MSG, responseData);
        } else {
            return MessageUtil.createMessage(MessageUtil.LOGIN_ERROR_CODE, MessageUtil.LOGIN_ERROR_MSG + "123");
        }
    }

    @RequestMapping("/logout")
    public Message logout() {
        boolean status = SessionUtil.removeSession();
        System.out.println("--- logout ---");
        System.out.println("logout:"+status);

        String timeused = timerService.stopTimer();
//        String timeused =watch.getTime()+" ms";
//        watch.stop();
//        System.out.println("logout! Time used: "+timeused);

        if (!status) {
            return MessageUtil.createMessage(MessageUtil.LOGOUT_ERROR_CODE, MessageUtil.LOGOUT_ERROR_MSG);
        } else
//            return MessageUtil.createMessage(MessageUtil.LOGOUT_SUCCESS_CODE, MessageUtil.LOGOUT_SUCCESS_MSG );
            return MessageUtil.createMessage(MessageUtil.LOGOUT_SUCCESS_CODE, MessageUtil.LOGOUT_SUCCESS_MSG +" Timer: "+timeused );
    }

}
