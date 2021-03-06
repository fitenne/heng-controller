import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./config/config-module/config.module";
import { RedisModule } from "./redis/redis.module";
import { SchedulerModule } from "./scheduler/scheduler.module";

@Module({
    imports: [ConfigModule, RedisModule, SchedulerModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
