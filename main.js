/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
let AppController = class AppController {
    constructor(schema, post) {
        this.schema = schema;
        this.post = post;
    }
    hi() {
        return { hi: 'world' };
    }
    getSchema() {
        return this.schema.getSchema();
    }
    getPosts() {
        return this.post.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/__hi'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "hi", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getSchema'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getSchema", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getPosts'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getPosts", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)('/apps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.SchemaService !== "undefined" && flowda_shared_1.SchemaService) === "function" ? _a : Object, typeof (_b = typeof wms_services_1.PostService !== "undefined" && wms_services_1.PostService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_controller_1 = __webpack_require__("./src/app/app.controller.ts");
const services_module_1 = __webpack_require__("./src/services/services.module.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const task_controller_1 = __webpack_require__("./src/app/task.controller.ts");
const user_controller_1 = __webpack_require__("./src/user/user.controller.ts");
const userLocal_strategy_1 = __webpack_require__("./src/user/userLocal.strategy.ts");
const appExceptionFilter_1 = __webpack_require__("./src/app/appExceptionFilter.ts");
const userJwt_strategy_1 = __webpack_require__("./src/user/userJwt.strategy.ts");
const process_controller_1 = __webpack_require__("./src/app/process.controller.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule],
        controllers: [app_controller_1.AppController, flowda_shared_node_1.DataController, task_controller_1.TaskController, user_controller_1.UserController, process_controller_1.ProcessController],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: appExceptionFilter_1.AppExceptionFilter,
            },
            userLocal_strategy_1.UserLocalStrategy,
            userJwt_strategy_1.UserJwtStrategy,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/appExceptionFilter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
let AppExceptionFilter = AppExceptionFilter_1 = class AppExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(AppExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let code;
        let message;
        let status;
        let stack;
        // 如果是 CustomError 提取 errorCode + message, 200
        if (exception instanceof flowda_shared_1.CustomError) {
            const rt = JSON.parse(exception.message);
            code = rt.errorCode;
            message = rt.message;
            status = common_1.HttpStatus.OK;
        }
        else if (exception instanceof Error) {
            // 如果是一般 Error，提取 message，errorCode 继续 undef
            message = exception.message;
            status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            stack = exception.stack;
        }
        // 如果是 HttpException，则重新赋值下 status
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            code = status;
            const res = exception.getResponse();
            if (typeof res === 'object' && Array.isArray(res.message)) {
                message = res.message.join(',');
            }
        }
        if (exception instanceof common_1.UnauthorizedException) {
            code = exception.getStatus();
            message = exception.message;
        }
        if (exception instanceof nestjs_zod_1.ZodValidationException) {
            code = exception.getStatus();
            message = exception.message;
        }
        this.logger.error({
            code: code,
            message: message,
            stack: stack,
        });
        response.status(status).json({
            code: code,
            message: message,
        });
    }
};
AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)()
], AppExceptionFilter);
exports.AppExceptionFilter = AppExceptionFilter;


/***/ }),

/***/ "./src/app/process.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ProcessController_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProcessController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let ProcessController = ProcessController_1 = class ProcessController {
    constructor(taskService) {
        this.taskService = taskService;
        this.logger = new common_1.Logger(ProcessController_1.name);
    }
    startTask(req, key) {
        this.logger.log(req.user);
        return this.taskService.start(key, req.user.uid);
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Post)('/:key/start'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Param)('key')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProcessController.prototype, "startTask", null);
ProcessController = ProcessController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('/process'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wms_services_1.TaskService !== "undefined" && wms_services_1.TaskService) === "function" ? _a : Object])
], ProcessController);
exports.ProcessController = ProcessController;


/***/ }),

/***/ "./src/app/task.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getTaskForm(taskId) {
        return this.taskService.getTaskForm(taskId);
    }
    getTask(taskId) {
        return this.taskService.getTask(taskId);
    }
    completeTask(taskId, body) {
        return this.taskService.complete(taskId, body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:taskId/form'),
    tslib_1.__param(0, (0, common_1.Param)('taskId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], TaskController.prototype, "getTaskForm", null);
tslib_1.__decorate([
    (0, common_1.Get)('/:taskId'),
    tslib_1.__param(0, (0, common_1.Param)('taskId')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], TaskController.prototype, "getTask", null);
tslib_1.__decorate([
    (0, common_1.Post)('/:taskId/complete'),
    tslib_1.__param(0, (0, common_1.Param)('taskId')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TaskController.prototype, "completeTask", null);
TaskController = tslib_1.__decorate([
    (0, common_1.Controller)('/tasks'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wms_services_1.TaskService !== "undefined" && wms_services_1.TaskService) === "function" ? _a : Object])
], TaskController);
exports.TaskController = TaskController;


/***/ }),

/***/ "./src/loadModule.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadModule = void 0;
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
const client_wms_1 = __webpack_require__("@prisma/client-wms");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_2 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const prisma = new client_wms_1.PrismaClient();
function loadModule(container) {
    container.bind(flowda_shared_1.PrismaClientSymbol).toConstantValue(prisma);
    container.load(flowda_shared_2.flowdaSharedModule);
    container.load(flowda_shared_node_1.flowdaSharedNodeModule);
    container.load(wms_services_1.wmsServiceModule);
}
exports.loadModule = loadModule;


/***/ }),

/***/ "./src/services/services.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = exports.servicesContainer = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const loadModule_1 = __webpack_require__("./src/loadModule.ts");
exports.servicesContainer = new inversify_1.Container();
(0, loadModule_1.loadModule)(exports.servicesContainer);
const services = (0, flowda_shared_1.getServices)(exports.servicesContainer);
let ServicesModule = class ServicesModule {
    constructor() { }
};
ServicesModule = tslib_1.__decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: services,
        exports: services,
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./src/user/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserController_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const userLocalAuth_guard_1 = __webpack_require__("./src/user/userLocalAuth.guard.ts");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
let UserController = UserController_1 = class UserController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(UserController_1.name);
    }
    register(dto) {
        return this.service.register(dto);
    }
    login(req) {
        return req.user;
    }
    logout(req) {
        // 客户端清空 token
        // 服务端清空 refresh token
        // 暂时不做 blacklist access_token 失效时间 10min
        return req.user;
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(nestjs_zod_1.ZodValidationPipe),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof wms_services_1.RegisterDto !== "undefined" && wms_services_1.RegisterDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userLocalAuth_guard_1.UserLocalAuthGuard),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    (0, common_1.Post)('logout'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "logout", null);
UserController = UserController_1 = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wms_services_1.UserService !== "undefined" && wms_services_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/user/userJwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const common_1 = __webpack_require__("@nestjs/common");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
let UserJwtStrategy = class UserJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'userJwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: wms_services_1.WMS_ENV.ACCESS_TOKEN_SECRET,
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return payload;
        });
    }
};
UserJwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], UserJwtStrategy);
exports.UserJwtStrategy = UserJwtStrategy;


/***/ }),

/***/ "./src/user/userJwtAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let UserJwtAuthGuard = class UserJwtAuthGuard extends (0, passport_1.AuthGuard)('userJwt') {
};
UserJwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserJwtAuthGuard);
exports.UserJwtAuthGuard = UserJwtAuthGuard;


/***/ }),

/***/ "./src/user/userLocal.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserLocalStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_local_1 = __webpack_require__("passport-local");
const common_1 = __webpack_require__("@nestjs/common");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
let UserLocalStrategy = UserLocalStrategy_1 = class UserLocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy, 'userLocal') {
    constructor(user) {
        super({
            usernameField: 'username',
            passwordField: 'password',
        });
        this.user = user;
        this.logger = new common_1.Logger(UserLocalStrategy_1.name);
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-useless-catch
            try {
                const tokens = yield this.user.validate(username, password);
                this.logger.log('valiate pass:' + username);
                return tokens;
            }
            catch (e) {
                return false;
            }
        });
    }
};
UserLocalStrategy = UserLocalStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof wms_services_1.UserService !== "undefined" && wms_services_1.UserService) === "function" ? _a : Object])
], UserLocalStrategy);
exports.UserLocalStrategy = UserLocalStrategy;


/***/ }),

/***/ "./src/user/userLocalAuth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
let UserLocalAuthGuard = class UserLocalAuthGuard extends (0, passport_1.AuthGuard)('userLocal') {
};
UserLocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UserLocalAuthGuard);
exports.UserLocalAuthGuard = UserLocalAuthGuard;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/controllers/data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const express = tslib_1.__importStar(__webpack_require__("express"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let DataController = class DataController {
    constructor(service) {
        this.service = service;
    }
    get(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.get(req.params[0], req.query);
        });
    }
    put(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.put(req.params[0], values);
        });
    }
    post(req, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.post(req.params[0], values);
        });
    }
    remove(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.service.remove(req.params[0]);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof express !== "undefined" && express.Request) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "get", null);
tslib_1.__decorate([
    (0, common_1.Put)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof express !== "undefined" && express.Request) === "function" ? _c : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "put", null);
tslib_1.__decorate([
    (0, common_1.Post)(''),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof express !== "undefined" && express.Request) === "function" ? _d : Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "post", null);
tslib_1.__decorate([
    (0, common_1.Delete)(''),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof express !== "undefined" && express.Request) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DataController.prototype, "remove", null);
DataController = tslib_1.__decorate([
    (0, common_1.Controller)('data/*'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _a : Object])
], DataController);
exports.DataController = DataController;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedNodeModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    bind('Factory<Logger>').toFactory(context => {
        return name => {
            return new common_1.Logger(name);
        };
    });
});


/***/ }),

/***/ "../../libs/flowda-shared-node/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/controllers/data.controller.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/flowdaShared.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const data_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts");
const schema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts");
const schemaTransformer_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, data_service_1.DataService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, schema_service_1.SchemaService);
    bind(prismaSchema_service_1.PrismaSchemaService).toSelf().inSingletonScope();
    bind(schemaTransformer_1.SchemaTransformer).toSelf().inTransientScope();
    bind('Factory<SchemaTransformer>').toFactory(context => {
        return (z) => {
            const transformer = context.container.get(schemaTransformer_1.SchemaTransformer);
            transformer.setZodType(z);
            return transformer;
        };
    });
});


/***/ }),

/***/ "../../libs/flowda-shared/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/flowdaShared.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/bindService.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/getServices.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/schema.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomError = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = void 0;
exports.PrismaClientSymbol = Symbol('PrismaClient');
/**
 * getServices 方法会将 inversify module 转换成 nestjs module，这样 nestjs controller 就可以使用了
 * 所以，注意：如果不需要给 controller 使用，则不需要 bind
 */
exports.ServiceSymbol = Symbol('Service');
exports.APISymbol = Symbol('API');
exports.PrismaZodSchemaSymbol = Symbol.for('PrismaZodSchema');
exports.CustomZodSchemaSymbol = Symbol.for('CustomZodSchema');
class CustomError extends Error {
    constructor(errorCode, message, extraInfo) {
        super(JSON.stringify({ errorCode, message }));
        this.message = JSON.stringify({ errorCode, message, extra: extraInfo });
    }
}
exports.CustomError = CustomError;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/data/data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
/*
todo: 增加 reference_type 区分是如何做 nest
e.g. Customer#weixinProfile 和 Order#customerId 的 nest 查询有区别
 */
let DataService = DataService_1 = class DataService {
    constructor(
    // todo: prisma 要不要强类型
    prisma, prismaSchemaService, loggerFactory) {
        this.prisma = prisma;
        this.prismaSchemaService = prismaSchemaService;
        this.logger = loggerFactory(DataService_1.name);
    }
    get(pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findParamRet = this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            // todo: id 的转换放到哪里合适？
            if (param.where.id) {
                this.logger.log('param.where:' + JSON.stringify(param.where));
                param.where.id = yield this.parseId(resource, param.where.id);
                this.logger.log('parsed param.where:' + JSON.stringify(param.where));
            }
            return this.prisma[resource][action](param);
        });
    }
    parseId(resource, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modelName = (0, matchPath_1.toModelName)(resource);
            const dmmf = yield this.prisma._getDmmf();
            const idField = dmmf.modelMap[modelName].fields.find((item) => item.name === 'id');
            const nid = idField.type === 'Int' ? parseInt(id) : id;
            this.logger.log('id field:' + idField.type + ' parsed: ' + nid);
            return nid;
        });
    }
    put(path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = (0, matchPath_1.matchPath)(path);
            const { resource, id } = ret[ret.length - 1];
            const nid = yield this.parseId(resource, id);
            values.id = nid;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.prisma[resource].update({
                where: { id: nid },
                data: values,
            });
        });
    }
    post(path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = (0, matchPath_1.matchPath)(path);
            const { resource } = ret[ret.length - 1];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.prisma[resource].create({
                data: values,
            });
        });
    }
    remove(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = (0, matchPath_1.matchPath)(path);
            const { resource, id } = ret[ret.length - 1];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.prisma[resource].update({
                where: {
                    id,
                },
                data: {
                    isDeleted: true,
                },
            });
        });
    }
};
DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(prismaSchema_service_1.PrismaSchemaService)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof prismaSchema_service_1.PrismaSchemaService !== "undefined" && prismaSchema_service_1.PrismaSchemaService) === "function" ? _a : Object, Function])
], DataService);
exports.DataService = DataService;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/meta.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meta = void 0;
const zod_1 = __webpack_require__("zod");
// motor-admin JSON.parse(document.getElementById('app').dataset.schema)
// todo: 目前尽量在后端定义，后续可以再开辟一条链路来储存 schema，并进行 merge
// 当然如果后端定义链路保留，应该做成 decorator
function meta(values) {
    return zod_1.z.unknown().optional().describe(JSON.stringify(values));
}
exports.meta = meta;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PrismaSchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(loggerFactory) {
        this.logger = loggerFactory(PrismaSchemaService_1.name);
    }
    toPrismaSelect(fields) {
        return fields.split(',').reduce((acc, cur) => {
            acc[cur] = true;
            return acc;
        }, {});
    }
    toFindParam(pathname, query) {
        if (!query.fields) {
            throw new Error('No query fields');
        }
        const parsedPath = (0, matchPath_1.matchPath)(pathname);
        if (parsedPath.length === 0)
            return {};
        const { resource, id } = parsedPath[parsedPath.length - 1];
        let action = '';
        let param = {};
        const queryFields = query.fields;
        const fields = this.toPrismaSelect(queryFields[resource]);
        const include = {};
        if (typeof query.include === 'string' && query.include !== '') {
            query.include.split(',').forEach((inc) => {
                include[inc] = {
                    select: this.toPrismaSelect(queryFields[inc]),
                };
            });
        }
        if (id != null) {
            action = 'findUnique';
            param = {
                where: {
                    id: id,
                },
                select: fields,
            };
        }
        else {
            action = 'findMany';
            if (parsedPath.length > 1) {
                // 情况1：根据前一个 resource id 搜索 list
                const pResource = parsedPath[parsedPath.length - 2];
                this.logger.log(`${resource}.findMany`);
                param = {
                    where: {
                        [`${pResource.resource}Id`]: pResource.id,
                        isDeleted: false,
                    },
                    select: Object.assign(Object.assign({}, fields), include),
                };
            }
            else {
                param = {
                    where: {
                        // todo: tenantId
                        isDeleted: false,
                    },
                    select: fields,
                };
            }
        }
        return {
            action,
            param,
            resource,
        };
    }
};
PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], PrismaSchemaService);
exports.PrismaSchemaService = PrismaSchemaService;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schema.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
let SchemaService = SchemaService_1 = class SchemaService {
    constructor(loggerFactory, modelSchemaFactory, zt, czt) {
        this.modelSchemaFactory = modelSchemaFactory;
        this.zt = zt;
        this.czt = czt;
        this.logger = loggerFactory(SchemaService_1.name);
    }
    getSchema() {
        console.time('generate schema');
        const schema = Object.keys(this.czt).reduce((acc, k) => {
            const e = this.czt[k];
            if (['ZodObject'].indexOf(e.constructor.name) > -1) {
                const transformer = this.modelSchemaFactory(e);
                acc[k] = transformer.buildSchema(k).toSchema();
            }
            else {
                this.logger.error('Wrong type', k);
            }
            return acc;
        }, {});
        console.timeEnd('generate schema');
        return schema;
    }
};
SchemaService = SchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<SchemaTransformer>')),
    tslib_1.__param(2, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__param(3, (0, inversify_1.inject)(types_1.CustomZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Object, Object])
], SchemaService);
exports.SchemaService = SchemaService;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/schema/schemaTransformer.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var SchemaTransformer_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaTransformer = exports.SUFFIX = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_1 = __webpack_require__("zod");
const inversify_1 = __webpack_require__("inversify");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
exports.SUFFIX = 'ResourceSchema';
let SchemaTransformer = SchemaTransformer_1 = class SchemaTransformer {
    constructor(loggerFactory, prismaZod) {
        this.prismaZod = prismaZod;
        this.modelLevelSchema = {};
        this.associations = [];
        this.columns = [];
        this.logger = loggerFactory(SchemaTransformer_1.name);
    }
    setZodType(z) {
        this.zodType = z;
    }
    buildSchema(schemaName) {
        if (!this.zodType) {
            const errMsg = 'zodType is not initialized';
            this.logger.error(errMsg);
            throw new Error(errMsg);
        }
        this.schemaName = schemaName;
        this.jsonSchema = (0, zod_openapi_1.generateSchema)(this.zodType);
        this.modelLevelSchema = this.getModelSchema();
        const props = this.getProperties();
        this.columns = props.reduce((acc, k) => {
            const jsProp = this.jsonSchema.properties[k];
            if (jsProp.type === 'array') {
                this.associations.push({
                    foreign_key: jsProp.foreign_key,
                    model_name: jsProp.model_name,
                    primary_key: jsProp.primary_key || 'id',
                    name: k,
                    slug: _.snakeCase(k),
                    display_name: jsProp.title,
                    schema_name: jsProp.model_name + exports.SUFFIX,
                });
                return acc; // 不处理 array
            }
            const c = _.omitBy(_.assign({ name: k }, {
                name: k,
                column_type: this.doColumnType(k),
                format: this.doFormat(k),
                display_name: this.doDisplayName(k),
                access_type: this.doAccessType(k),
                reference: jsProp.reference ? this.doRef(k) : undefined,
                validators: this.doValidators(k),
            }), _.isUndefined);
            acc.push(c);
            return acc;
        }, []);
        if (Array.isArray(this.extendSchema.columns)) {
            // 合并 __meta.columns 和 cols
            this.columns.forEach((c) => {
                const f = this.extendSchema.columns.find((c1) => c1.name === c.name);
                Object.assign(c, f || {});
            });
        }
        return this;
    }
    toSchema() {
        const name = this.schemaName.split(exports.SUFFIX)[0];
        return {
            name: name,
            slug: plur.plural(_.snakeCase(name)),
            schema_name: this.schemaName,
            primary_key: this.modelLevelSchema.primary_key || 'id',
            display_column: this.modelLevelSchema.display_column,
            display_name: this.modelLevelSchema.display_name,
            display_primary_key: this.modelLevelSchema.display_primary_key == null
                ? true
                : this.modelLevelSchema.display_primary_key === 'true',
            searchable_columns: this.modelLevelSchema.searchable_columns
                ? this.modelLevelSchema.searchable_columns.split(',')
                : undefined,
            columns: this.columns,
            associations: this.associations,
        };
    }
    doRef(k) {
        const jsProp = this.jsonSchema.properties[k];
        const t = jsProp.reference + 'Schema';
        const ref = (0, zod_openapi_1.generateSchema)(this.prismaZod[t]);
        const { primary_key, display_name, display_column } = ref;
        return {
            model_name: jsProp.reference,
            primary_key,
            display_name,
            display_column,
        };
    }
    getProperties() {
        // 拿到最大的 columns
        const properties = Object.keys(this.zodType.shape).filter(key => {
            const item = this.zodType.shape[key];
            return (key !== '__meta' &&
                !(item instanceof zod_1.z.ZodDefault || item._def.typeName === 'ZodDefault') &&
                !(item instanceof zod_1.z.ZodNever || item._def.typeName === 'ZodDefault'));
        });
        return properties;
    }
    getModelSchema() {
        this.checkValid();
        const _extends = this.extendSchema.extends;
        const { prisma } = this.extendSchema;
        if (prisma !== false && !this.prismaZod[_extends]) {
            throw new Error('no _extends');
        }
        else {
            if (prisma !== false) {
                return (0, zod_openapi_1.generateSchema)(this.prismaZod[_extends]);
            }
            else
                return _.omit(this.jsonSchema, ['type', 'properties', 'required']);
        }
    }
    checkValid() {
        // 暂时认为必须有 __meta，简化下逻辑
        // 现在 __meta 里必须定义 extends
        // todo: support no prisma schema
        if (!this.jsonSchema.properties.__meta) {
            throw new Error('no __meta');
        }
        this.extendSchema = JSON.parse(this.jsonSchema.properties.__meta.description);
    }
    doDisplayName(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.title === 'string') {
            return jsProp.title;
        }
        else {
            if (k === 'createdAt') {
                return '创建时间';
            }
            if (k === 'updatedAt') {
                return '更新时间';
            }
            return;
        }
    }
    doAccessType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (typeof jsProp.access_type === 'string') {
            return jsProp.access_type;
        }
        else {
            if (k === 'createdAt' || k === 'updatedAt' || k === this.modelLevelSchema.primary_key) {
                return 'read_only';
            }
            else {
                return;
            }
        }
    }
    doColumnType(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            return 'tag';
        }
        else if (jsProp.override_type) {
            jsProp.type = jsProp.override_type;
        }
        return jsProp.reference ? 'reference' : jsProp.type;
    }
    doValidators(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (!jsProp) {
            this.logger.warn('undef key: ' + k);
            return;
        }
        const validators = [];
        if (['createdAt', 'updatedAt'].indexOf(k) === -1 &&
            !jsProp.nullable &&
            this.jsonSchema.required.indexOf(k) > -1) {
            validators.push({ required: true });
        }
        return validators.length === 0 ? undefined : validators;
    }
    doFormat(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            return {
                select_options: jsProp.enum,
            };
        }
        else {
            return;
        }
    }
};
SchemaTransformer = SchemaTransformer_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__param(1, (0, inversify_1.inject)(types_1.PrismaZodSchemaSymbol)),
    tslib_1.__metadata("design:paramtypes", [Function, Object])
], SchemaTransformer);
exports.SchemaTransformer = SchemaTransformer;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/bindService.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bindService = void 0;
function bindService(bind, serviceIdentifier, constructor) {
    bind(constructor).toSelf().inSingletonScope();
    bind(serviceIdentifier).toFactory((context) => {
        return context.container.get(constructor);
    });
}
exports.bindService = bindService;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/getServices.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getServices = void 0;
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
function getServices(servicesContainer) {
    return servicesContainer.getAll(types_1.ServiceSymbol).map((service) => {
        return {
            provide: service.constructor,
            useValue: service,
        };
    });
}
exports.getServices = getServices;


/***/ }),

/***/ "../../libs/flowda-shared/src/utils/matchPath.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.matchPath = exports.toModelName = void 0;
const tslib_1 = __webpack_require__("tslib");
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const REG = /(([a-z_]+s)\/?([a-z0-9-_]+)?)+/g;
function toModelName(s) {
    return _.startCase(_.camelCase(s)).replace(/ /g, '');
}
exports.toModelName = toModelName;
function matchPath(path) {
    const ret1 = path.match(REG);
    if (ret1 != null) {
        const ret2 = ret1.map(item => {
            const [resource, id] = item.split('/');
            const p = plur.singular(resource);
            return {
                resource: _.camelCase(p),
                resourceSchema: toModelName(p) + 'ResourceSchema',
                origin: resource,
                id,
            };
        });
        return ret2;
    }
    else {
        return [];
    }
}
exports.matchPath = matchPath;


/***/ }),

/***/ "../../libs/prisma-wms/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.zt = void 0;
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/prisma-wms/src/zod/index.ts"), exports);
exports.zt = tslib_1.__importStar(__webpack_require__("../../libs/prisma-wms/src/zod/index.ts"));


/***/ }),

/***/ "../../libs/prisma-wms/src/zod/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostWithRelationsSchema = exports.PostSchema = exports.UserProfileWithRelationsSchema = exports.UserProfileSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.MemberInfoSchema = exports.TaskFormRelationSchema = exports.UserGroupSchema = exports.UserStatusSchema = exports.UserScalarFieldEnumSchema = exports.UserProfileScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.TaskFormRelationScalarFieldEnumSchema = exports.SortOrderSchema = exports.PostScalarFieldEnumSchema = exports.MemberInfoScalarFieldEnumSchema = void 0;
const zod_1 = __webpack_require__("zod");
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.MemberInfoScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'gender']);
exports.PostScalarFieldEnumSchema = zod_1.z.enum(['id', 'title', 'content', 'published', 'authorId']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.TaskFormRelationScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'taskDefinitionKey', 'formKey']);
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.UserProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'fullName']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'username', 'hashedPassword', 'hashedRefreshToken', 'status', 'role']);
exports.UserStatusSchema = zod_1.z.enum(['ACTIVE', 'FORBIDDEN']);
exports.UserGroupSchema = zod_1.z.enum(['ADMIN', 'USER']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////
/////////////////////////////////////////
// TASK FORM RELATION SCHEMA
/////////////////////////////////////////
exports.TaskFormRelationSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    taskDefinitionKey: zod_1.z.string(),
    formKey: zod_1.z.string(),
}).openapi({ "display_name": "节点和表单关联关系" });
/////////////////////////////////////////
// MEMBER INFO SCHEMA
/////////////////////////////////////////
exports.MemberInfoSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string(),
    gender: zod_1.z.string(),
}).openapi({ "display_name": "成员信息" });
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
exports.UserSchema = zod_1.z.object({
    status: exports.UserStatusSchema,
    role: exports.UserGroupSchema,
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean().nullable(),
    username: zod_1.z.string(),
    hashedPassword: zod_1.z.string(),
    hashedRefreshToken: zod_1.z.string().nullable(),
});
exports.UserWithRelationsSchema = exports.UserSchema.merge(zod_1.z.object({
    profile: zod_1.z.lazy(() => exports.UserProfileWithRelationsSchema).nullable(),
    Post: zod_1.z.lazy(() => exports.PostWithRelationsSchema).array(),
}));
/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////
exports.UserProfileSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean().nullable(),
    userId: zod_1.z.number().int(),
    fullName: zod_1.z.string(),
});
exports.UserProfileWithRelationsSchema = exports.UserProfileSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
}));
/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////
exports.PostSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    title: zod_1.z.string(),
    content: zod_1.z.string().nullable(),
    published: zod_1.z.boolean(),
    authorId: zod_1.z.number().int(),
});
exports.PostWithRelationsSchema = exports.PostSchema.merge(zod_1.z.object({
    author: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
}));


/***/ }),

/***/ "../../libs/wms-services/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const zod_openapi_1 = __webpack_require__("@anatine/zod-openapi");
const zod_1 = __webpack_require__("zod");
(0, zod_openapi_1.extendZodWithOpenApi)(zod_1.z);
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/wmsService.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/lib/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/lib/wms-env.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/services/task.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/services/user.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/services/post.service.ts"), exports);


/***/ }),

/***/ "../../libs/wms-services/src/lib/ability.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ability = void 0;
const ability_1 = __webpack_require__("@casl/ability");
const casl_prisma_1 = __webpack_require__("../../libs/wms-services/src/lib/casl-prisma.ts");
const { can, cannot, build } = new ability_1.AbilityBuilder(casl_prisma_1.createPrismaAbility);
can('read', 'Post', ['id', 'title']).because('You can not read these fields');
exports.ability = build();


/***/ }),

/***/ "../../libs/wms-services/src/lib/casl-prisma.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.accessibleBy = exports.createPrismaAbility = void 0;
const runtime_1 = __webpack_require__("@casl/prisma/runtime");
const createPrismaAbility = (0, runtime_1.createAbilityFactory)();
exports.createPrismaAbility = createPrismaAbility;
const accessibleBy = (0, runtime_1.createAccessibleByFactory)();
exports.accessibleBy = accessibleBy;


/***/ }),

/***/ "../../libs/wms-services/src/lib/error-code.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserError = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
var UserError;
(function (UserError) {
    class UserExist extends flowda_shared_1.CustomError {
        constructor() {
            super(1001, 'User exist');
        }
    }
    UserError.UserExist = UserExist;
    class UserNotExist extends flowda_shared_1.CustomError {
        constructor() {
            super(1002, 'User not exist');
        }
    }
    UserError.UserNotExist = UserNotExist;
    class UserNamePasswordMismatch extends flowda_shared_1.CustomError {
        constructor() {
            super(1002, 'Username and password mismatch');
        }
    }
    UserError.UserNamePasswordMismatch = UserNamePasswordMismatch;
})(UserError = exports.UserError || (exports.UserError = {}));


/***/ }),

/***/ "../../libs/wms-services/src/lib/schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManagerApproveSchema = exports.AddToAdminResourceSchema = exports.ProcessDefinitionResourceSchema = exports.TaskResourceSchema = exports.TaskFormRelationResourceSchema = exports.UserResourceSchema = exports.MemberInfoResourceSchema = void 0;
const prisma_wms_1 = __webpack_require__("../../libs/prisma-wms/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const zod_1 = __webpack_require__("zod");
exports.MemberInfoResourceSchema = prisma_wms_1.MemberInfoSchema.omit({
    isDeleted: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'MemberInfoSchema',
    }),
});
exports.UserResourceSchema = prisma_wms_1.UserSchema.omit({
    isDeleted: true,
    hashedPassword: true,
    hashedRefreshToken: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'UserSchema',
    }),
});
exports.TaskFormRelationResourceSchema = prisma_wms_1.TaskFormRelationSchema.omit({
    isDeleted: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'TaskFormRelationSchema',
    }),
});
// prisma:false camunda API
exports.TaskResourceSchema = zod_1.z
    .object({
    id: zod_1.z.string().cuid(),
    name: zod_1.z.string(),
    assignee: zod_1.z.string(),
    created: zod_1.z.date(),
    executionId: zod_1.z.string(),
    processDefinitionId: zod_1.z.string(),
    processInstanceId: zod_1.z.string(),
    taskDefinitionKey: zod_1.z.string(),
    variables: zod_1.z.string(),
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '任务',
    display_column: 'name',
    display_primary_key: 'true',
});
exports.ProcessDefinitionResourceSchema = zod_1.z
    .object({
    id: zod_1.z.string(),
    key: zod_1.z.string(),
    name: zod_1.z.string(),
    version: zod_1.z.number(),
    resource: zod_1.z.string(),
    deploymentId: zod_1.z.string().cuid(),
    suspended: zod_1.z.boolean(),
    historyTimeToLive: zod_1.z.number(),
    startableInTasklist: zod_1.z.boolean(),
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '已部署流程图',
    display_column: 'name',
    display_primary_key: 'true',
});
// custom form
exports.AddToAdminResourceSchema = prisma_wms_1.UserSchema.omit({
    isDeleted: true,
    hashedPassword: true,
    hashedRefreshToken: true,
    status: true,
    createdAt: true,
    updatedAt: true,
    username: true,
})
    .extend({
    uid: zod_1.z.number().openapi({ title: '申请人 ID', access_type: 'read_only' }),
    username: zod_1.z.string().openapi({ title: '申请人用户名', access_type: 'read_only' }),
    __meta: (0, flowda_shared_1.meta)({
        extends: 'UserSchema',
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '申请管理员表单',
    display_column: 'username',
    display_primary_key: 'true',
});
// 表单
exports.ManagerApproveSchema = zod_1.z
    .object({
    comment: zod_1.z.number().openapi({ title: '意见' }),
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({});


/***/ }),

/***/ "../../libs/wms-services/src/lib/wms-env.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WMS_ENV = void 0;
const znv_1 = __webpack_require__("znv");
const zod_1 = __webpack_require__("zod");
exports.WMS_ENV = (0, znv_1.parseEnv)(process.env, {
    TEST_ENV: zod_1.z.string().optional(),
    DATABASE_URL: zod_1.z.string().min(1),
    REFRESH_TOKEN_SECRET: zod_1.z.string().min(1),
    REFRESH_TOKEN_EXPIRE: zod_1.z.number().default(7 * 24 * 60 * 60),
    ACCESS_TOKEN_SECRET: zod_1.z.string().min(1),
    ACCESS_TOKEN_EXPIRE: zod_1.z.number().default(15 * 60),
    C7_REST_URL: zod_1.z.string().min(1),
});


/***/ }),

/***/ "../../libs/wms-services/src/services/post.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/ban-ts-comment */
var PostService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-wms"));
const ability_1 = __webpack_require__("../../libs/wms-services/src/lib/ability.ts");
const extra_1 = __webpack_require__("@casl/ability/extra");
let PostService = PostService_1 = class PostService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(PostService_1.name);
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // https://casl.js.org/v6/en/api/casl-ability-extra#permitted-fields-of
            const fields = (0, extra_1.permittedFieldsOf)(ability_1.ability, 'read', 'Post', {
                fieldsFrom: rule => rule.fields || [],
            });
            const res = yield this.prisma.post.findMany({
                select: fields.reduce((acc, cur) => {
                    acc[cur] = true;
                    return acc;
                }, {}),
            });
            return res;
        });
    }
};
PostService = PostService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], PostService);
exports.PostService = PostService;


/***/ }),

/***/ "../../libs/wms-services/src/services/task.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TaskService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-wms"));
const axios_1 = tslib_1.__importDefault(__webpack_require__("axios"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const wms_env_1 = __webpack_require__("../../libs/wms-services/src/lib/wms-env.ts");
let TaskService = TaskService_1 = class TaskService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(TaskService_1.name);
    }
    start(key, uid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.post(wms_env_1.WMS_ENV.C7_REST_URL + `/process-definition/key/${key}/start`, {
                'variables': {
                    'uid': {
                        'value': uid,
                        'type': 'Integer',
                    },
                },
                'businessKey': 'myBusinessKey',
            });
        });
    }
    getTask(taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(wms_env_1.WMS_ENV.C7_REST_URL + `/task/${taskId}`);
            const res2 = yield axios_1.default.get(wms_env_1.WMS_ENV.C7_REST_URL + `/task/${taskId}/form-variables`);
            res.data.variables = JSON.stringify(res2.data);
            return res.data;
        });
    }
    /**
     * @param taskId
     *
     * 1. 根据 taskId -> formKey
     * 2. 前端根据 formKey -> form schema 并初始化对应的 view model
     * 3. 前端写一点点代码，扩展 form schema 的 onInit 和 onComplete
     */
    getTaskForm(taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield axios_1.default.get(wms_env_1.WMS_ENV.C7_REST_URL + `/task/${taskId}`);
            const taskDefinitionKey = res.data.taskDefinitionKey;
            const res2 = yield axios_1.default.get(wms_env_1.WMS_ENV.C7_REST_URL + `/task/${taskId}/form-variables`);
            this.logger.log(res2.data);
            const ret = yield this.prisma.taskFormRelation.findUnique({
                where: {
                    taskDefinitionKey,
                },
            });
            if (ret) {
                return {
                    taskId: taskId,
                    taskDefinitionKey: taskDefinitionKey,
                    formKey: ret.formKey,
                    variables: res2.data,
                };
            }
            return undefined;
        });
    }
    complete(taskId, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { resource, data } = body;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const ret1 = yield this.prisma[_.lowerFirst(resource)].create({
                data: data,
            });
            try {
                const ret2 = yield axios_1.default.post(wms_env_1.WMS_ENV.C7_REST_URL + `/task/${taskId}/complete`, {}, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
            }
            catch (e) {
                this.logger.error(e);
            }
            return {
                taskId,
                resource,
                data,
                ret1,
            };
        });
    }
};
TaskService = TaskService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], TaskService);
exports.TaskService = TaskService;


/***/ }),

/***/ "../../libs/wms-services/src/services/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var UserService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = exports.RegisterDto = exports.registerSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-wms"));
const zod_1 = __webpack_require__("zod");
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const error_code_1 = __webpack_require__("../../libs/wms-services/src/lib/error-code.ts");
const bcrypt = tslib_1.__importStar(__webpack_require__("bcrypt"));
const jwt = tslib_1.__importStar(__webpack_require__("jsonwebtoken"));
const wms_env_1 = __webpack_require__("../../libs/wms-services/src/lib/wms-env.ts");
const axios_1 = tslib_1.__importDefault(__webpack_require__("axios"));
exports.registerSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
class RegisterDto extends (0, nestjs_zod_1.createZodDto)(exports.registerSchema) {
}
exports.RegisterDto = RegisterDto;
let UserService = UserService_1 = class UserService {
    constructor(prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(UserService_1.name);
    }
    register(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findFirst({
                where: {
                    username: dto.username,
                },
            });
            if (user) {
                this.logger.warn('User exist:' + dto.username);
                throw new error_code_1.UserError.UserExist();
            }
            // 同步到 c7
            // todo: 涉及到外部依赖，进行 mock，暂时先用 env
            if (wms_env_1.WMS_ENV.TEST_ENV !== 'yes') {
                try {
                    yield axios_1.default.post(wms_env_1.WMS_ENV.C7_REST_URL + `/user/create`, {
                        profile: {
                            id: dto.username,
                        },
                        credentials: {
                            password: dto.password,
                        },
                    });
                }
                catch (e) {
                    this.logger.error('call c7 failed:/user/create:' + dto.username);
                    throw e;
                }
            }
            const hashedPassword = yield bcrypt.hash(dto.password, 10);
            const aUser = yield this.prisma.user.create({
                data: {
                    username: dto.username,
                    hashedPassword: hashedPassword,
                    hashedRefreshToken: null,
                    status: db.UserStatus.ACTIVE,
                },
            });
            return {
                id: aUser.id,
                username: aUser.username,
            };
        });
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.findFirst({
                where: {
                    username: username,
                },
            });
            if (!user) {
                this.logger.warn('User not exist:' + username);
                throw new error_code_1.UserError.UserNotExist();
            }
            const match = yield bcrypt.compare(password, user.hashedPassword);
            if (!match) {
                this.logger.warn('Username and password mismatch:' + username);
                throw new error_code_1.UserError.UserNamePasswordMismatch();
            }
            const payload = { uid: user.id };
            const rt = this.generateJwt(payload, wms_env_1.WMS_ENV.REFRESH_TOKEN_SECRET, wms_env_1.WMS_ENV.REFRESH_TOKEN_EXPIRE);
            user.hashedRefreshToken = rt.token;
            yield this.prisma.user.update({
                where: { id: user.id },
                data: user,
            });
            const at = this.generateJwt(payload, wms_env_1.WMS_ENV.ACCESS_TOKEN_SECRET, wms_env_1.WMS_ENV.ACCESS_TOKEN_EXPIRE);
            return {
                username: user.username,
                refresh_token: rt.token,
                access_token: at.token,
            };
        });
    }
    generateJwt(payload, secret, expires) {
        const token = jwt.sign(payload, secret, {
            expiresIn: `${expires}s`,
        });
        const decode = jwt.decode(token);
        return {
            token: token,
            iat: decode.iat,
            exp: decode.exp,
        };
    }
    verifyAccessToken(at) {
        return jwt.verify(at, wms_env_1.WMS_ENV.ACCESS_TOKEN_SECRET);
    }
};
UserService = UserService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "../../libs/wms-services/src/wmsService.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wmsServiceModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const prisma_wms_1 = __webpack_require__("../../libs/prisma-wms/src/index.ts");
const schema = tslib_1.__importStar(__webpack_require__("../../libs/wms-services/src/lib/schema.ts"));
const task_service_1 = __webpack_require__("../../libs/wms-services/src/services/task.service.ts");
const user_service_1 = __webpack_require__("../../libs/wms-services/src/services/user.service.ts");
const post_service_1 = __webpack_require__("../../libs/wms-services/src/services/post.service.ts");
exports.wmsServiceModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_1.PrismaZodSchemaSymbol).toConstantValue(prisma_wms_1.zt);
    bind(flowda_shared_1.CustomZodSchemaSymbol).toConstantValue(schema);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, task_service_1.TaskService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, user_service_1.UserService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, post_service_1.PostService);
});


/***/ }),

/***/ "@anatine/zod-openapi":
/***/ ((module) => {

module.exports = require("@anatine/zod-openapi");

/***/ }),

/***/ "@casl/ability":
/***/ ((module) => {

module.exports = require("@casl/ability");

/***/ }),

/***/ "@casl/ability/extra":
/***/ ((module) => {

module.exports = require("@casl/ability/extra");

/***/ }),

/***/ "@casl/prisma/runtime":
/***/ ((module) => {

module.exports = require("@casl/prisma/runtime");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@prisma/client-wms":
/***/ ((module) => {

module.exports = require("@prisma/client-wms");

/***/ }),

/***/ "axios":
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "http-proxy-middleware":
/***/ ((module) => {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "inversify":
/***/ ((module) => {

module.exports = require("inversify");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nestjs-zod":
/***/ ((module) => {

module.exports = require("nestjs-zod");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "pluralize":
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "znv":
/***/ ((module) => {

module.exports = require("znv");

/***/ }),

/***/ "zod":
/***/ ((module) => {

module.exports = require("zod");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const app_module_1 = __webpack_require__("./src/app/app.module.ts");
const http_proxy_middleware_1 = __webpack_require__("http-proxy-middleware");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
const passport_jwt_1 = __webpack_require__("passport-jwt");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const user = app.get(wms_services_1.UserService);
        app.use((req, res, next) => {
            if (req.originalUrl.includes('favicon.ico')) {
                res.status(204).end();
            }
            else if (req.url.indexOf('/api/camunda/engine-rest/') > -1) {
                const extract = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken();
                const bearerToken = extract(req);
                if (bearerToken) {
                    try {
                        const authed = user.verifyAccessToken(bearerToken);
                        if (authed) {
                            next();
                        }
                        else {
                            res.status(401).json({
                                message: '[PROXY] Unauthorized',
                            });
                        }
                    }
                    catch (e) {
                        res.status(401).json({
                            message: '[PROXY] Unauthorized',
                        });
                    }
                }
                else {
                    res.status(401).json({
                        message: '[PROXY] Unauthorized',
                    });
                }
            }
            else {
                next();
            }
        });
        // Proxy endpoints
        app.use('/api/camunda/engine-rest/', (0, http_proxy_middleware_1.createProxyMiddleware)({
            target: wms_services_1.WMS_ENV.C7_REST_URL,
            changeOrigin: true,
            pathRewrite: {
                [`^/api/camunda/engine-rest/`]: '',
            },
        }));
        const port = process.env.PORT || 3344;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map