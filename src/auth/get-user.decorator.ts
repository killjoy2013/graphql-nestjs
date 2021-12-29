import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GetUser = createParamDecorator(
  (data, context: ExecutionContext) => {
    const fieldName = context.getHandler().name;

    const ctx = GqlExecutionContext.create(context).getContext();
    const user = ctx.req.user;
    const rights = user.rights as string[];

    if (!rights.includes(fieldName)) {
      throw new UnauthorizedException(`You must have ${fieldName} right`);
    }

    return user;
  },
);
