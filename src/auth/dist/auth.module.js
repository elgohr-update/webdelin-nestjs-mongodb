"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var nestjs_typegoose_1 = require("nestjs-typegoose");
var auth_controller_1 = require("./auth.controller");
var user_model_1 = require("./user.model");
var auth_service_1 = require("./auth.service");
var config_1 = require("@nestjs/config");
var jwt_config_1 = require("./../configs/jwt.config");
var jwt_1 = require("@nestjs/jwt");
var passport_1 = require("@nestjs/passport");
var jwt_strategy_1 = require("./strategies/jwt.strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            controllers: [auth_controller_1.AuthController],
            imports: [
                nestjs_typegoose_1.TypegooseModule.forFeature([
                    {
                        typegooseClass: user_model_1.UserModel,
                        schemaOptions: {
                            collection: 'User'
                        }
                    },
                ]),
                config_1.ConfigModule,
                jwt_1.JwtModule.registerAsync({
                    imports: [config_1.ConfigModule],
                    inject: [config_1.ConfigService],
                    useFactory: jwt_config_1.getJWTConfig
                }),
                passport_1.PassportModule,
            ],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
