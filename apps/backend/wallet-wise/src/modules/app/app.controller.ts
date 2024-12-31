import { Body, Controller, Post } from "@nestjs/common";

// TODO: Remove this controller after testing
@Controller("/api/v1")
export class AppController {
  @Post("/login")
  async login(@Body() body: { email: string; password: string }) {
    return {
      message: "Authenticated 🥳",
      user: body.password,
    };
  }
}
