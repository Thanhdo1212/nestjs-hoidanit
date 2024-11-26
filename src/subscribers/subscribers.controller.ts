import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { IUser } from 'src/users/user.interface';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';

@Controller('subscribers') // => /subscribers
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @ResponseMessage('Create a new subscriber')
  @Post()
  async create(
    @Body() createSubscriberDto: CreateSubscriberDto,
    @User() user: IUser,
  ) {
    const newCreatedSubscriber = await this.subscribersService.create(
      createSubscriberDto,
      user,
    );
    return {
      _id: newCreatedSubscriber._id,
      createdBy: newCreatedSubscriber.createdBy,
    };
  }

  // update a subscriber
  @ResponseMessage('update a subscriber')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriberDto: UpdateSubscriberDto,
    @User() user: IUser,
  ) {
    return this.subscribersService.update(id, updateSubscriberDto, user);
  }

  // delete a subscriber
  @ResponseMessage('Delete a subscriber')
  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.subscribersService.remove(id, user);
  }

  // fetch a subscriber by id

  @ResponseMessage('fetch a subscriber by id')
  @Get(':id')
  @Public()
  findOne(
    @Param('id')
    id: string,
  ) {
    return this.subscribersService.findOne(id);
  }

  // fetch subscriber with paginate
  @Get()
  @ResponseMessage('Fetch company with paginate')
  @Public()
  findAll(
    @Query('current') currentPage: string,
    @Query('pageSize') limit: string,
    @Query() queryString: string,
  ) {
    return this.subscribersService.findAll(+currentPage, +limit, queryString);
  }
}