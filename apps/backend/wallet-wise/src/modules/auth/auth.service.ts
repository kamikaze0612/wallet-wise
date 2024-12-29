import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";

import { SupabaseService } from "@/modules/supabase/supabase.service";

@Injectable()
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}

  async login(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // TODO: Catch it on nestjs layer
      switch (error.code) {
        case "invalid_credentials":
          throw new UnauthorizedException("Password or email is incorrect");
        default:
          throw new InternalServerErrorException("Something went wrong");
      }
    }

    return data;
  }

  async register(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      // TODO: Catch it on nestjs layer
      switch (error.code) {
        case "email_address_invalid":
          throw new BadRequestException("Email is invalid");
        default:
          throw new InternalServerErrorException("Something went wrong");
      }
    }

    return data;
  }
}
