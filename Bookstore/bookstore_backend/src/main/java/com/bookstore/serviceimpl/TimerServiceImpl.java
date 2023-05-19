package com.bookstore.serviceimpl;

import com.bookstore.service.TimerService;
import org.apache.commons.lang.time.StopWatch;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service
@Scope("session")
public class TimerServiceImpl  implements TimerService {

    private StopWatch watch;

    @Override
    public void startTimer(){
        watch = new StopWatch();
        watch.start();
    }
    @Override
    public String stopTimer(){
        String timeused =watch.getTime()+" ms";
        watch.stop();
        System.out.println("logout! Time used: "+timeused);

        return timeused;
    }
}
