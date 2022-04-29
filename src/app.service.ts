import { Injectable } from '@nestjs/common';
import { ProducerBatch } from 'kafkajs';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  async getHello() {
    const a= 101011

    // const topicMessages = {
    //   topicMessages:[
    //   {
    //     topic:'test1',
    //     messages: [{
    //       value: 'CPTest1'
    //     }]
    //   },
    //   {
    //     topic:'test2',
    //     messages: [{
    //       value: 'CPTest2'
    //     }]
    //   },
    // ]};

    // await this.producerService.produceMulti(topicMessages);

    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          value: `${a} Hello world`, 
        },
        {
          value: 'Chandra Pratap',
        }
      ],
    });

    return 'Hello World!';
  }
}
