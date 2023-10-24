/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
const express = tslib_1.__importStar(__webpack_require__("express"));
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
let AppController = class AppController {
    constructor(schema, user, custom, tableFilter) {
        this.schema = schema;
        this.user = user;
        this.custom = custom;
        this.tableFilter = tableFilter;
    }
    hi() {
        return { hi: 'world' };
    }
    getSchema() {
        return this.schema.getSchema();
    }
    findByUsername(username) {
        return this.user.findByUsername(username);
    }
    getProductLineAndEquipment() {
        return this.custom.getProductLineAndEquipment();
    }
    getEquipmentList(req) {
        return this.custom.getEquipmentList(req.query);
    }
    getEquipment(req) {
        return this.custom.getEquipment(req.query);
    }
    test() {
        return this.custom.test();
    }
    saveTableFilter(dto) {
        return this.tableFilter.save(dto);
    }
    queryTableFilter(dto) {
        return this.tableFilter.query(dto);
    }
    removeTableFilter(dto) {
        return this.tableFilter.remove(dto);
    }
    createIncomingInspectionRecord(dto) {
        return this.custom.createIncomingInspectionRecord(dto);
    }
    createOperationInspectionRecord(dto) {
        return this.custom.createOperationInspectionRecord(dto);
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
    (0, common_1.Get)('/findByUsername'),
    tslib_1.__param(0, (0, common_1.Query)('username')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "findByUsername", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getProductLineAndEquipment'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getProductLineAndEquipment", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getEquipmentList'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof express !== "undefined" && express.Request) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getEquipmentList", null);
tslib_1.__decorate([
    (0, common_1.Get)('/getEquipment'),
    tslib_1.__param(0, (0, common_1.Req)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof express !== "undefined" && express.Request) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getEquipment", null);
tslib_1.__decorate([
    (0, common_1.Get)('/_test'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "test", null);
tslib_1.__decorate([
    (0, common_1.Post)('/saveTableFilter'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof flowda_shared_node_1.SaveTableFilterSchemaDto !== "undefined" && flowda_shared_node_1.SaveTableFilterSchemaDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "saveTableFilter", null);
tslib_1.__decorate([
    (0, common_1.Post)('/queryTableFilter'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof flowda_shared_node_1.QueryTableFilterSchemaDto !== "undefined" && flowda_shared_node_1.QueryTableFilterSchemaDto) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "queryTableFilter", null);
tslib_1.__decorate([
    (0, common_1.Post)('/removeTableFilter'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof flowda_shared_node_1.RemoveTableFilterSchemaDto !== "undefined" && flowda_shared_node_1.RemoveTableFilterSchemaDto) === "function" ? _j : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "removeTableFilter", null);
tslib_1.__decorate([
    (0, common_1.Post)('/createIncomingInspectionRecord'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof wms_services_1.CreateIncomingInspectionRecordSchemaDto !== "undefined" && wms_services_1.CreateIncomingInspectionRecordSchemaDto) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "createIncomingInspectionRecord", null);
tslib_1.__decorate([
    (0, common_1.Post)('/createOperationInspectionRecord'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_l = typeof wms_services_1.CreateOperationInspectionRecordSchemaDto !== "undefined" && wms_services_1.CreateOperationInspectionRecordSchemaDto) === "function" ? _l : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "createOperationInspectionRecord", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)('/apps'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.SchemaService !== "undefined" && flowda_shared_1.SchemaService) === "function" ? _a : Object, typeof (_b = typeof wms_services_1.UserService !== "undefined" && wms_services_1.UserService) === "function" ? _b : Object, typeof (_c = typeof wms_services_1.CustomService !== "undefined" && wms_services_1.CustomService) === "function" ? _c : Object, typeof (_d = typeof flowda_shared_node_1.TableFilterService !== "undefined" && flowda_shared_node_1.TableFilterService) === "function" ? _d : Object])
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
const userJwt_strategy_1 = __webpack_require__("./src/user/userJwt.strategy.ts");
const process_controller_1 = __webpack_require__("./src/app/process.controller.ts");
const data_controller_1 = __webpack_require__("./src/app/data.controller.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_module_1.ServicesModule],
        controllers: [app_controller_1.AppController, data_controller_1.DataController, task_controller_1.TaskController, user_controller_1.UserController, process_controller_1.ProcessController],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: flowda_shared_node_1.AppExceptionFilter,
            },
            userLocal_strategy_1.UserLocalStrategy,
            userJwt_strategy_1.UserJwtStrategy,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/data.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const express = tslib_1.__importStar(__webpack_require__("express"));
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const userJwtAuth_guard_1 = __webpack_require__("./src/user/userJwtAuth.guard.ts");
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
    (0, common_1.UseGuards)(userJwtAuth_guard_1.UserJwtAuthGuard),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _a : Object])
], DataController);
exports.DataController = DataController;


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
const flowda_shared_node_1 = __webpack_require__("../../libs/flowda-shared-node/src/index.ts");
const prisma = new client_wms_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
function loadModule(container) {
    container.bind(flowda_shared_1.PrismaClientSymbol).toConstantValue(prisma);
    container.load(flowda_shared_1.flowdaSharedModule);
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


var UserJwtStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserJwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_1 = __webpack_require__("@nestjs/passport");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const common_1 = __webpack_require__("@nestjs/common");
const wms_services_1 = __webpack_require__("../../libs/wms-services/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let UserJwtStrategy = UserJwtStrategy_1 = class UserJwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'userJwt') {
    constructor(auth) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: wms_services_1.WMS_ENV.ACCESS_TOKEN_SECRET,
        });
        this.auth = auth;
        this.logger = new common_1.Logger(UserJwtStrategy_1.name);
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.logger.log(`expires at ${new Date(payload.exp0)}`);
            this.auth.setPayload(payload);
            return payload;
        });
    }
};
UserJwtStrategy = UserJwtStrategy_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(flowda_shared_1.AuthService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.AuthService !== "undefined" && flowda_shared_1.AuthService) === "function" ? _a : Object])
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
            const tokens = yield this.user.validate(username, password);
            return tokens;
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

/***/ "../../libs/flowda-shared-node/src/assist/table-filter.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var TableFilterService_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterService = exports.RemoveTableFilterSchemaDto = exports.QueryTableFilterSchemaDto = exports.SaveTableFilterSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-wms"));
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const prisma_wms_1 = __webpack_require__("../../libs/prisma-wms/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
// todo: 接口这块或者至少 schema 这块，要 shared， design 模块也要能用到
const SaveTableFilterSchema = prisma_wms_1.TableFilterSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    isDeleted: true,
});
const QueryTableFilterSchema = prisma_wms_1.TableFilterSchema.pick({
    path: true,
});
const RemoveTableFilterSchema = prisma_wms_1.TableFilterSchema.pick({
    id: true,
});
class SaveTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(SaveTableFilterSchema) {
}
exports.SaveTableFilterSchemaDto = SaveTableFilterSchemaDto;
class QueryTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(QueryTableFilterSchema) {
}
exports.QueryTableFilterSchemaDto = QueryTableFilterSchemaDto;
class RemoveTableFilterSchemaDto extends (0, nestjs_zod_1.createZodDto)(RemoveTableFilterSchema) {
}
exports.RemoveTableFilterSchemaDto = RemoveTableFilterSchemaDto;
let TableFilterService = TableFilterService_1 = class TableFilterService {
    constructor(
    // todo: 暂时先强类型，后续应该做成服务
    prisma, loggerFactory) {
        this.prisma = prisma;
        this.logger = loggerFactory(TableFilterService_1.name);
    }
    save(dto) {
        return this.prisma.tableFilter.create({
            data: dto,
        });
    }
    remove(dto) {
        return this.prisma.tableFilter.delete({
            where: { id: dto.id },
        });
    }
    query(dto) {
        return this.prisma.tableFilter.findMany({
            where: {
                isDeleted: false,
                path: dto.path,
            },
            select: {
                id: true,
                path: true,
                name: true,
                filterJSON: true,
            },
        });
    }
};
TableFilterService = TableFilterService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, Function])
], TableFilterService);
exports.TableFilterService = TableFilterService;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppExceptionFilter_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
let AppExceptionFilter = AppExceptionFilter_1 = class AppExceptionFilter {
    constructor(auth) {
        this.auth = auth;
        this.logger = new common_1.Logger(AppExceptionFilter_1.name);
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (exception instanceof flowda_shared_1.CustomError) {
            const rt = JSON.parse(exception.message);
            this.logger.error(`CustomError|${rt.code}|${rt.message}`);
            response.status(common_1.HttpStatus.OK).json({
                code: rt.code,
                message: rt.message,
            });
        }
        else if (exception instanceof common_1.HttpException) {
            const res = exception.getResponse();
            if (typeof res === 'object') {
                const extra = JSON.stringify(res);
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}|${extra}`);
            }
            else {
                this.logger.error(`HttpException|${exception.getStatus()}|${exception.message}`);
            }
            if (exception.getStatus() === 401) {
                this.auth.setPayload(null);
            }
            response.status(exception.getStatus()).json({
                code: exception.getStatus(),
                message: typeof res === 'object' ? res : exception.message,
            });
        }
        else {
            this.logger.error(exception.stack);
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                code: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: exception.message,
            });
        }
    }
};
AppExceptionFilter = AppExceptionFilter_1 = tslib_1.__decorate([
    (0, common_1.Catch)(),
    tslib_1.__param(0, (0, common_1.Inject)(flowda_shared_1.AuthService)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof flowda_shared_1.AuthService !== "undefined" && flowda_shared_1.AuthService) === "function" ? _a : Object])
], AppExceptionFilter);
exports.AppExceptionFilter = AppExceptionFilter;


/***/ }),

/***/ "../../libs/flowda-shared-node/src/flowdaSharedNode.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flowdaSharedNodeModule = void 0;
const inversify_1 = __webpack_require__("inversify");
const common_1 = __webpack_require__("@nestjs/common");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const table_filter_service_1 = __webpack_require__("../../libs/flowda-shared-node/src/assist/table-filter.service.ts");
exports.flowdaSharedNodeModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, table_filter_service_1.TableFilterService);
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
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/filters/appExceptionFilter.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared-node/src/assist/table-filter.service.ts"), exports);


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
const auth_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/auth/auth.service.ts");
exports.flowdaSharedModule = new inversify_1.ContainerModule((bind) => {
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, data_service_1.DataService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, schema_service_1.SchemaService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, auth_service_1.AuthService);
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
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/utils/browser-log-utils.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/interfaces/schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/meta.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schemaTransformer.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/data/data.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/flowda-shared/src/services/auth/auth.service.ts"), exports);


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/schema.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/flowda-shared/src/interfaces/types.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomError = exports.CustomZodSchemaSymbol = exports.PrismaZodSchemaSymbol = exports.URLSymbol = exports.APISymbol = exports.ServiceSymbol = exports.PrismaClientSymbol = void 0;
exports.PrismaClientSymbol = Symbol('PrismaClient');
/**
 * getServices 方法会将 inversify module 转换成 nestjs module，这样 nestjs controller 就可以使用了
 * 所以，注意：如果不需要给 controller 使用，则不需要 bind
 */
exports.ServiceSymbol = Symbol('Service');
exports.APISymbol = Symbol('API');
exports.URLSymbol = Symbol.for('URL');
exports.PrismaZodSchemaSymbol = Symbol.for('PrismaZodSchema');
exports.CustomZodSchemaSymbol = Symbol.for('CustomZodSchema');
class CustomError extends Error {
    constructor(code, message, extra) {
        super(JSON.stringify({ code: code, message }));
        this.message = JSON.stringify({ code, message, extra });
    }
}
exports.CustomError = CustomError;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AuthService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
let AuthService = AuthService_1 = class AuthService {
    constructor(loggerFactory) {
        this.payload = null;
        this.logger = loggerFactory(AuthService_1.name);
    }
    setPayload(payload) {
        if (payload == null) {
            this.logger.log(`set payload ${this.payload} to null`);
            this.payload = null;
        }
        else {
            if (this.payload == null) {
                this.logger.log(`set payload to ${JSON.stringify(payload, null, 2)}`);
                this.payload = payload;
            }
            else {
                // noop 不需要打日志了
            }
        }
    }
};
AuthService = AuthService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Function])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "../../libs/flowda-shared/src/services/data/data.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DataService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const prismaSchema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/prismaSchema.service.ts");
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const auth_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/auth/auth.service.ts");
/*
todo: 增加 reference_type 区分是如何做 nest
e.g. Customer#weixinProfile 和 Order#customerId 的 nest 查询有区别
 */
let DataService = DataService_1 = class DataService {
    constructor(
    // todo: prisma 要不要强类型
    prisma, prismaSchemaService, auth, loggerFactory) {
        this.prisma = prisma;
        this.prismaSchemaService = prismaSchemaService;
        this.auth = auth;
        this.logger = loggerFactory(DataService_1.name);
    }
    get(pathname, query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const findParamRet = this.prismaSchemaService.toFindParam(pathname, query);
            if (_.isEmpty(findParamRet)) {
                return {};
            }
            const { resource, action, param } = findParamRet;
            if (param.where.id) {
                param.where.id = yield this.parseId(resource, param.where.id);
                // this.logger.log('param.where:' + JSON.stringify(param.where))
            }
            const ret = yield this.prisma[resource][action](param);
            return ret;
        });
    }
    put(path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updateParamRet = this.prismaSchemaService.toUpdateParam(path, values);
            const { resource, param } = updateParamRet;
            const ret = yield this.prisma[resource].update(param);
            this.logger.log(`auth info ${JSON.stringify(this.auth.payload, null, 2)} values: ${JSON.stringify(param)}`);
            return ret;
        });
    }
    post(path, values) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const createParamRet = this.prismaSchemaService.toCreateParam(path, values);
            const { resource, param } = createParamRet;
            if (createParamRet['x-unique']) {
                const ref = createParamRet['x-unique'];
                const refId = values[ref.name];
                const refModelName = ref.reference.model_name;
                const refData = yield this.prisma[_.lowerFirst(refModelName)].findUnique({
                    where: {
                        id: refId,
                    },
                    include: {
                        [resource]: true,
                    },
                });
                const id = refData[resource].id;
                const ret = yield this.prisma[resource].update({
                    where: {
                        id: id,
                    },
                    data: Object.assign(Object.assign({}, param.data), {
                        isDeleted: false,
                    }),
                });
                this.logger.log(`auth info ${JSON.stringify(this.auth.payload, null, 2)} POST(update) path: ${path}, values: ${JSON.stringify(param)}`);
                return ret;
            }
            else {
                const ret = yield this.prisma[resource].create(param);
                this.logger.log(`auth info ${JSON.stringify(this.auth.payload, null, 2)} POST path: ${path}, values: ${JSON.stringify(param)}`);
                return ret;
            }
        });
    }
    remove(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const matchRet = (0, matchPath_1.matchPath)(path);
            const { resource, id } = matchRet[matchRet.length - 1];
            let nid;
            if (id == null) {
                throw new Error(`remove ${resource}, id null`);
            }
            else {
                nid = yield this.parseId(resource, id);
            }
            const ret = yield this.prisma[resource].update({
                where: {
                    id: nid,
                },
                data: {
                    isDeleted: true,
                },
            });
            this.logger.log(`auth info ${JSON.stringify(this.auth.payload, null, 2)} DELETE path: ${path}`);
            return ret;
        });
    }
    parseId(resource, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modelName = (0, matchPath_1.toModelName)(resource);
            const dmmf = yield this.prisma._getDmmf();
            const idField = dmmf.modelMap[modelName].fields.find((item) => item.name === 'id');
            const nid = idField.type === 'Int' ? parseInt(id) : id;
            // this.logger.log(`id: ${id}, type: ${idField.type}`)
            return nid;
        });
    }
};
DataService = DataService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(types_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(prismaSchema_service_1.PrismaSchemaService)),
    tslib_1.__param(2, (0, inversify_1.inject)(auth_service_1.AuthService)),
    tslib_1.__param(3, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof prismaSchema_service_1.PrismaSchemaService !== "undefined" && prismaSchema_service_1.PrismaSchemaService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object, Function])
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaSchemaService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
const schema_service_1 = __webpack_require__("../../libs/flowda-shared/src/services/schema/schema.service.ts");
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const separate = _.repeat('-', 50);
let PrismaSchemaService = PrismaSchemaService_1 = class PrismaSchemaService {
    constructor(schemaService, loggerFactory) {
        this.schemaService = schemaService;
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
        this.logger.log(separate);
        this.logger.log(`pathname: ${pathname}, query: ${JSON.stringify(query)}`);
        const parsedPath = (0, matchPath_1.matchPath)(pathname);
        if (parsedPath.length === 0)
            return {};
        const { resource, id, resourceSchema } = parsedPath[parsedPath.length - 1];
        const schemaCache = this.schemaService.getSchemaCache();
        const theResourceSchema = schemaCache[resourceSchema];
        let action;
        let param = {};
        const queryFields = query.fields;
        const fields = this.toPrismaSelect(queryFields[resource]);
        const include = {};
        if (typeof query.include === 'string' && query.include !== '') {
            query.include.split(',').forEach((inc) => {
                // this.logger.log(`[toFindParam] parse include ${inc}`)
                const refSelect = this.getRefSelect(theResourceSchema, inc);
                const selectRet = this.toPrismaSelect(queryFields[inc]);
                include[inc] = {
                    // todo: 似乎 prisma nest select 不支持 order by 只有 include 支持，但是 include 不支持 nest select fields
                    // orderBy: [{ createdAt: 'desc' }],
                    select: Object.assign(Object.assign({}, selectRet), refSelect),
                };
            });
        }
        if (id != null) {
            action = 'findUnique';
            param = {
                where: {
                    id: id,
                },
                select: Object.assign(Object.assign({}, fields), include),
            };
        }
        else {
            /*
            [
            {
              type: { eq: 'UNSCHEDULE' },
              status: { eq: 'DONE' },
            },
          ]
            */
            const filter = this.convertQueryToPrismaFilter(theResourceSchema, query);
            const sort = query.sort;
            let orderBy;
            if (!sort) {
                orderBy = [{ createdAt: 'desc' }];
            }
            else {
                if (sort[0] === '-') {
                    orderBy = [{ [sort.slice(1)]: 'desc' }];
                }
                else {
                    orderBy = [{ [sort]: 'asc' }];
                }
            }
            action = 'findMany';
            if (parsedPath.length > 1) {
                // 情况1：根据前一个 resource id 搜索 list
                const pResource = parsedPath[parsedPath.length - 2];
                // this.logger.log(`${resource}.findMany`)
                param = {
                    where: Object.assign({
                        [`${pResource.resource}Id`]: pResource.id,
                        isDeleted: false,
                    }, filter),
                    orderBy,
                    select: Object.assign(Object.assign({}, fields), include),
                };
            }
            else {
                param = {
                    where: Object.assign({
                        isDeleted: false,
                    }, filter),
                    orderBy,
                    select: Object.assign(Object.assign({}, fields), include),
                };
            }
        }
        const ret = {
            action,
            param,
            resource,
        };
        this.logger.log(JSON.stringify(ret));
        this.logger.log(separate);
        return ret;
    }
    /**
     * 根据 resource 的 schema 中 columns 是 ref， e.g. resource(Receipt) 收货单关联的 ref(partVersion)
     * 找到对应 refSchema 的 display_column 中的又 include e.g. display_column(partId)，得到 nest select
     * { [include: partVersion]: { select { partId: true, [partId x-relationField: part]: { select: { id: true, [display_column*]: true} }}} }
     * 注意 display_column* 则临时只取了最后一个
     *
     * todo: 现在是根据 display_column 里如果有 ref 来计算的，后续可以改成所有 ref 都默认向下搜索一层
     * @param resourceSchema
     * @param includeRef
     */
    getRefSelect(resourceSchema, includeRef) {
        const refSelect = {};
        const schemaCache = this.schemaService.getSchemaCache();
        if (resourceSchema && resourceSchema.columns) {
            // e.g. inc partVersion
            const refColumn = resourceSchema.columns.find(col => col.column_type === 'reference' && col.reference['x-relationField'] === includeRef);
            if (refColumn) {
                // e.g. model_name PartVersion
                // e.g. display_column partId,version
                const { model_name, display_column } = refColumn.reference;
                // e.g. PartVersionResourceSchema
                const refSchema = schemaCache[model_name + 'ResourceSchema'];
                let displayCols = [];
                if (typeof display_column === 'string') {
                    displayCols = [display_column];
                }
                else {
                    displayCols = display_column;
                }
                displayCols.forEach(item => {
                    // e.g. item partId
                    const disCol = refSchema.columns.find(col => col.name === item);
                    if (disCol == null) {
                        throw new Error(`schema '${model_name}', wrong display column '${item}'`);
                    }
                    else if (disCol.column_type === 'reference') {
                        // e.g. name
                        const display_column = disCol.reference.display_column;
                        const relationField = disCol.reference['x-relationField'];
                        let display_column2;
                        if (Array.isArray(display_column)) {
                            display_column2 = display_column;
                        }
                        else {
                            display_column2 = [display_column];
                        }
                        const select = display_column2.reduce((acc, cur) => {
                            acc[cur] = true;
                            return acc;
                        }, {});
                        refSelect[relationField] = {
                            select: Object.assign({
                                id: true,
                            }, select),
                        };
                    }
                });
            }
        }
        return refSelect;
    }
    convertQueryToPrismaFilter(resourceSchema, query) {
        if (query.filter && Array.isArray(query.filter) && query.filter.length > 0) {
            // console.log(query.filter)
            const filter = query.filter;
            const andIdx = filter.findIndex(item => typeof item === 'string' && item === 'AND');
            const orIdx = filter.findIndex(item => typeof item === 'string' && item === 'OR');
            const ret = {};
            if (andIdx === 0) {
                ret['AND'] = [];
                if (orIdx === -1) {
                    const andFilter = filter.slice(1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(resourceSchema, item)));
                }
                else {
                    const andFilter = filter.slice(1, orIdx);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(resourceSchema, item)));
                    ret['OR'] = [];
                    const orFilter = filter.slice(orIdx + 1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(resourceSchema, item)));
                }
            }
            else if (orIdx === 0) {
                ret['OR'] = [];
                if (andIdx === -1) {
                    const orFilter = filter.slice(1);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(resourceSchema, item)));
                }
                else {
                    const orFilter = filter.slice(1, andIdx);
                    orFilter.forEach(item => ret['OR'].push(this.mapItemToPrismaFilter(resourceSchema, item)));
                    ret['AND'] = [];
                    const andFilter = filter.slice(andIdx + 1);
                    andFilter.forEach(item => ret['AND'].push(this.mapItemToPrismaFilter(resourceSchema, item)));
                }
            }
            else {
                throw new Error('Wrong filter');
            }
            return ret;
        }
        else {
            return {};
        }
    }
    toUpdateParam(pathname, values) {
        this.logger.log(separate);
        this.logger.log(`pathname: ${pathname}, body: ${JSON.stringify(values)}`);
        const matchRet = (0, matchPath_1.matchPath)(pathname);
        const { resource, id, resourceSchema } = matchRet[matchRet.length - 1];
        this.removeRelationFields(resourceSchema, values);
        const ret = {
            resource,
            param: {
                where: { id: id },
                data: values,
            },
        };
        this.logger.log(JSON.stringify(ret));
        this.logger.log(separate);
        return ret;
    }
    mapItemToPrismaFilter(resourceSchema, item) {
        const schemaCache = this.schemaService.getSchemaCache();
        // 先初步转换
        const k = Object.keys(item)[0];
        // https://javascript.plainenglish.io/how-to-rename-object-keys-in-react-javascript-using-lodash-b73fb92ea24d
        item[k] = _.mapKeys(item[k], (v, k) => {
            switch (k) {
                case 'eq':
                    return 'equals';
                case 'neq':
                    return 'not';
                default:
                    return k;
            }
        });
        item[k] = _.mapValues(item[k], v => {
            // 得用 schema 判断下，主要就是 string 的 LIKE
            const kk = k.split('.');
            let col;
            if (kk.length === 2) {
                const refCol = resourceSchema.columns.find(col => {
                    return col.column_type === 'reference' && col.reference['x-relationField'] === kk[0];
                });
                const refSchema = schemaCache[refCol.reference.model_name + 'ResourceSchema'];
                col = refSchema.columns.find(item => item.name === kk[1]);
            }
            else {
                col = resourceSchema.columns.find(item => item.name === k);
            }
            if (col && ['string', 'textarea'].indexOf(col.column_type) > -1) {
                return v;
            }
            else if ((0, matchPath_1.isLikeNumber)(v)) {
                return _.toNumber(v);
            }
            else {
                return v;
            }
        });
        // 再将 . 改成嵌套（chatGPT 给出的方式）
        const ret = {};
        _.forEach(item, (value, key) => {
            _.set(ret, key.replace(/\./g, '.'), value);
        });
        return ret;
    }
    toCreateParam(pathname, values) {
        const matchRet = (0, matchPath_1.matchPath)(pathname);
        // console.log(matchRet)
        const { resource, resourceSchema } = matchRet[matchRet.length - 1];
        this.removeRelationFields(resourceSchema, values);
        const schemaCache = this.schemaService.getSchemaCache();
        const theResourceSchema = schemaCache[resourceSchema];
        // console.log(theResourceSchema)
        const uniqueCols = theResourceSchema.columns.filter(col => {
            return col.column_type === 'reference' && col.reference['x-unique'];
        });
        if (uniqueCols.length === 0) {
            return {
                action: 'create',
                resource: resource,
                param: {
                    data: values,
                },
            };
        }
        else if (uniqueCols.length > 1) {
            throw new Error('Not support multiple unique key');
        }
        else {
            const uniqueCol = uniqueCols[0];
            // console.log(uniqueCol)
            return {
                action: 'update',
                resource: resource,
                param: {
                    data: values,
                },
                'x-unique': uniqueCol,
            };
        }
    }
    removeRelationFields(resourceSchema, values) {
        const schemaCache = this.schemaService.getSchemaCache();
        // todo: 目前是通过显式声明 x-relationField 来删除 put 时候的 reference 值
        const relationFields = [];
        if (schemaCache) {
            const theResourceSchema = schemaCache[resourceSchema];
            // console.log(theResourceSchema)
            if (theResourceSchema) {
                Object.keys(values).forEach((k) => {
                    var _a;
                    const kProp = theResourceSchema.columns && theResourceSchema.columns.find(col => col.name === k);
                    if (kProp && kProp.column_type === 'reference') {
                        const relationField = (_a = kProp.reference) === null || _a === void 0 ? void 0 : _a['x-relationField'];
                        if (relationField) {
                            relationFields.push(relationField);
                        }
                    }
                });
            }
        }
        // console.log(relationFields)
        relationFields.forEach(k => {
            delete values[k];
        });
    }
};
PrismaSchemaService = PrismaSchemaService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(schema_service_1.SchemaService)),
    tslib_1.__param(1, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof schema_service_1.SchemaService !== "undefined" && schema_service_1.SchemaService) === "function" ? _a : Object, Function])
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
        this.schemaCache = schema;
        console.timeEnd('generate schema');
        return schema;
    }
    getSchemaCache() {
        if (!this.schemaCache) {
            return {};
        }
        return this.schemaCache;
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
const types_1 = __webpack_require__("../../libs/flowda-shared/src/interfaces/types.ts");
const matchPath_1 = __webpack_require__("../../libs/flowda-shared/src/utils/matchPath.ts");
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
            if (jsProp.virtual === 'true') {
                return acc; // 不处理 virtual，目前只有 1..1 用到
            }
            if (jsProp.type === 'array') {
                if (!jsProp.model_name) {
                    throw new Error(`${this.schemaName} 1..n model_name is not set`);
                }
                this.associations.push({
                    foreign_key: this.getForeignKey(jsProp.foreign_key),
                    model_name: jsProp.model_name,
                    primary_key: jsProp.primary_key || 'id',
                    name: k,
                    slug: (0, matchPath_1.toPath)(k),
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
                prisma: jsProp.prisma,
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
        return _.omitBy({
            name: name,
            slug: (0, matchPath_1.toPath)(name),
            schema_name: this.schemaName,
            primary_key: this.modelLevelSchema.primary_key || 'id',
            custom: this.jsonSchema.custom,
            display_column: this.doDisplayColumn(this.modelLevelSchema.display_column),
            display_name: this.modelLevelSchema.display_name,
            display_primary_key: this.modelLevelSchema.display_primary_key == null
                ? true
                : this.modelLevelSchema.display_primary_key === 'true',
            searchable_columns: this.modelLevelSchema.searchable_columns
                ? this.modelLevelSchema.searchable_columns.split(',')
                : undefined,
            columns: this.columns,
            associations: this.associations,
            // __jsonschema: this.jsonSchema,
        }, _.isUndefined);
    }
    doDisplayColumn(display_column) {
        if (!display_column)
            return undefined; // 默认 id
        const cols = display_column.split(',');
        if (cols.length > 1)
            return cols;
        else
            return display_column;
    }
    doRef(k) {
        const jsProp = this.jsonSchema.properties[k];
        // console.log(jsProp)
        const t = jsProp.reference + 'Schema';
        const ref = (0, zod_openapi_1.generateSchema)(this.prismaZod[t]);
        const { primary_key, display_name, display_column } = ref;
        const ret = {
            model_name: jsProp.reference,
            'x-relationField': jsProp['x-relationField'] || k.replace('Id', ''),
            primary_key,
            display_name: jsProp.display_name || display_name,
            display_column: this.doDisplayColumn(display_column),
            // foreign_key: jsProp.foreign_key,
        };
        if (jsProp['x-unique']) {
            return Object.assign(Object.assign({}, ret), { 'x-unique': true });
        }
        else {
            return ret;
        }
    }
    getProperties() {
        // 拿到最大的 columns
        const keys = Object.keys(this.zodType.shape);
        const properties = keys.filter(key => {
            const item = this.zodType.shape[key];
            return (key !== '__meta' &&
                !(item instanceof zod_1.z.ZodDefault || item._def.typeName === 'ZodDefault') &&
                !(item instanceof zod_1.z.ZodNever || item._def.typeName === 'ZodDefault') &&
                keys.indexOf(key + 'Id') === -1 && // 忽略 product (product + 'Id' === productId)
                key !== 'isDeleted');
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
        else if (jsProp.format === 'date-time') {
            return 'datetime';
        }
        if (jsProp.column_type) {
            return jsProp.column_type;
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
        if (['createdAt', 'updatedAt'].indexOf(k) === -1 && !jsProp.nullable && this.jsonSchema.required.indexOf(k) > -1) {
            validators.push({ required: true });
        }
        return validators.length === 0 ? undefined : validators;
    }
    doFormat(k) {
        const jsProp = this.jsonSchema.properties[k];
        if (Array.isArray(jsProp.enum)) {
            if (jsProp['x-enumNames']) {
                const enumNames = jsProp['x-enumNames'].split(',');
                return {
                    select_options: jsProp.enum.map((opt, idx) => ({
                        value: opt,
                        label: enumNames[idx],
                    })),
                };
            }
            return {
                select_options: jsProp.enum.map((opt) => ({
                    value: opt,
                    label: opt,
                })),
            };
        }
        else {
            return;
        }
    }
    getForeignKey(fk) {
        if (fk)
            return fk;
        const schema = this.extendSchema.extends;
        return _.lowerFirst(schema.split('Schema')[0]) + 'Id';
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

/***/ "../../libs/flowda-shared/src/utils/browser-log-utils.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = exports.warn = exports.info = exports.debug = void 0;
const levelColorMap = {
    0: '#c0392b',
    1: '#f39c12',
    3: '#00BCD4',
    4: '#ccc',
};
function style(level) {
    return `
  background: ${levelColorMap[level]};
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
  padding: 2px 0.5em;
`;
}
function debug(msg) {
    return [`%c debug `, style(4), '', msg];
}
exports.debug = debug;
function info(msg) {
    return [`%c info `, style(3), '', msg];
}
exports.info = info;
function warn(msg) {
    return [`%c warn `, style(1), '', msg];
}
exports.warn = warn;
function error(msg) {
    return [`%c error `, style(0), '', msg];
}
exports.error = error;


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
exports.matchPath = exports.toSchemaName = exports.toPath = exports.toModelName = exports.isLikeNumber = void 0;
const tslib_1 = __webpack_require__("tslib");
const plur = tslib_1.__importStar(__webpack_require__("pluralize"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
// s* equipment 不可数
const REG = /(([a-z_]+s*)\/?([A-Za-z0-9-_:]+)?)+/g;
const NUM_REG = /^-?\d+(\.\d+)?$/;
// todo: 暂时没想到更精确的方法，这个应该能覆盖 100%
function isLikeNumber(value) {
    return NUM_REG.test(value);
}
exports.isLikeNumber = isLikeNumber;
function toModelName(s) {
    return _.startCase(_.camelCase(plur.singular(s))).replace(/ /g, '');
}
exports.toModelName = toModelName;
function toPath(modelName) {
    return plur.plural(_.snakeCase(modelName));
}
exports.toPath = toPath;
function toSchemaName(slug) {
    const p = plur.singular(slug);
    return toModelName(p) + 'ResourceSchema';
}
exports.toSchemaName = toSchemaName;
function matchPath(path) {
    const ret1 = path.match(REG);
    // console.log(ret1)
    if (ret1 != null) {
        const ret2 = ret1.map(item => {
            const [resource, id] = item.split('/');
            const p = plur.singular(resource);
            return {
                resource: _.camelCase(p),
                resourceSchema: toSchemaName(resource),
                origin: resource,
                id: isLikeNumber(id) ? _.toNumber(id) : id,
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
exports.IncomingInspectionSpecWithRelationsSchema = exports.IncomingInspectionSpecSchema = exports.PartVersionWithRelationsSchema = exports.PartVersionSchema = exports.PartWithRelationsSchema = exports.PartSchema = exports.RepairRecordWithRelationsSchema = exports.RepairRecordSchema = exports.RepairMaterialInventoryWithRelationsSchema = exports.RepairMaterialInventorySchema = exports.EquipmentWithRelationsSchema = exports.EquipmentSchema = exports.ProductLineWithRelationsSchema = exports.ProductLineSchema = exports.UserProfileWithRelationsSchema = exports.UserProfileSchema = exports.UserWithRelationsSchema = exports.UserSchema = exports.TableFilterSchema = exports.TaskFormRelationSchema = exports.IncomingInspectionResultSchema = exports.PartTypeSchema = exports.RepairTypeSchema = exports.RepairRecordStatusSchema = exports.UserGroupSchema = exports.UserStatusSchema = exports.WorkerOrderScalarFieldEnumSchema = exports.UserScalarFieldEnumSchema = exports.UserProfileScalarFieldEnumSchema = exports.TransactionIsolationLevelSchema = exports.TaskFormRelationScalarFieldEnumSchema = exports.TableFilterScalarFieldEnumSchema = exports.SortOrderSchema = exports.RepairRecordScalarFieldEnumSchema = exports.RepairMaterialInventoryScalarFieldEnumSchema = exports.ReceiptScalarFieldEnumSchema = exports.ProductLineScalarFieldEnumSchema = exports.PartVersionScalarFieldEnumSchema = exports.PartScalarFieldEnumSchema = exports.PartOperationVersionScalarFieldEnumSchema = exports.PartOperationScalarFieldEnumSchema = exports.PartOperationInspectionItemScalarFieldEnumSchema = exports.OperationInspectionRecordScalarFieldEnumSchema = exports.OperationInspectionRecordItemScalarFieldEnumSchema = exports.NonconformItemScalarFieldEnumSchema = exports.IncomingInspectionSpecScalarFieldEnumSchema = exports.IncomingInspectionSpecItemScalarFieldEnumSchema = exports.IncomingInspectionRecordScalarFieldEnumSchema = exports.IncomingInspectionRecordItemScalarFieldEnumSchema = exports.EquipmentScalarFieldEnumSchema = void 0;
exports.OperationInspectionRecordItemWithRelationsSchema = exports.OperationInspectionRecordItemSchema = exports.OperationInspectionRecordWithRelationsSchema = exports.OperationInspectionRecordSchema = exports.WorkerOrderWithRelationsSchema = exports.WorkerOrderSchema = exports.IncomingInspectionRecordItemWithRelationsSchema = exports.IncomingInspectionRecordItemSchema = exports.IncomingInspectionRecordWithRelationsSchema = exports.IncomingInspectionRecordSchema = exports.ReceiptWithRelationsSchema = exports.ReceiptSchema = exports.PartOperationInspectionItemWithRelationsSchema = exports.PartOperationInspectionItemSchema = exports.PartOperationVersionWithRelationsSchema = exports.PartOperationVersionSchema = exports.PartOperationWithRelationsSchema = exports.PartOperationSchema = exports.NonconformItemWithRelationsSchema = exports.NonconformItemSchema = exports.IncomingInspectionSpecItemWithRelationsSchema = exports.IncomingInspectionSpecItemSchema = void 0;
const zod_1 = __webpack_require__("zod");
/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////
/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////
exports.EquipmentScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'description', 'repairPlan', 'workStation', 'productLineId']);
exports.IncomingInspectionRecordItemScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'incomingInspectionRecordId', 'incomingInspectionSpecItemId', 'inspectionIteration', 'result']);
exports.IncomingInspectionRecordScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'receiptId', 'result', 'incomingInspectionSpecId', 'note']);
exports.IncomingInspectionSpecItemScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'no', 'name', 'spec', 'incomingInspectionSpecId']);
exports.IncomingInspectionSpecScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'version', 'partVersionId']);
exports.NonconformItemScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'partId', 'description', 'note']);
exports.OperationInspectionRecordItemScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'partOperationInspectionItemId', 'operationInspectionRecordId', 'inspectionIteration1', 'inspectionIteration2', 'inspectionIteration3', 'inspectionIteration4']);
exports.OperationInspectionRecordScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'workerOrderId', 'partOperationVersionId', 'note']);
exports.PartOperationInspectionItemScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'partOperationVersionId']);
exports.PartOperationScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'no', 'partId']);
exports.PartOperationVersionScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'version', 'name', 'partOperationId']);
exports.PartScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'no', 'name', 'partType']);
exports.PartVersionScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'version', 'partId', 'note']);
exports.ProductLineScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'description']);
exports.ReceiptScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'partVersionId', 'lot']);
exports.RepairMaterialInventoryScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'name', 'description', 'quantity', 'minimumQuantity', 'equipmentId']);
exports.RepairRecordScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'type', 'equipmentId', 'status', 'description']);
exports.SortOrderSchema = zod_1.z.enum(['asc', 'desc']);
exports.TableFilterScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'path', 'name', 'filterJSON']);
exports.TaskFormRelationScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'taskDefinitionKey', 'formKey']);
exports.TransactionIsolationLevelSchema = zod_1.z.enum(['ReadUncommitted', 'ReadCommitted', 'RepeatableRead', 'Serializable']);
exports.UserProfileScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'userId', 'fullName']);
exports.UserScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'username', 'hashedPassword', 'hashedRefreshToken', 'status', 'role']);
exports.WorkerOrderScalarFieldEnumSchema = zod_1.z.enum(['id', 'createdAt', 'updatedAt', 'isDeleted', 'no', 'partId', 'inspectorName', 'reviewerName']);
exports.UserStatusSchema = zod_1.z.enum(['ACTIVE', 'FORBIDDEN']);
exports.UserGroupSchema = zod_1.z.enum(['ADMIN', 'USER']);
exports.RepairRecordStatusSchema = zod_1.z.enum(['TO_ASSIGN', 'DOING', 'TO_REVIEW', 'DONE']).openapi({ "x-enumNames": "待分配,维修中,待审核,维修完成" });
exports.RepairTypeSchema = zod_1.z.enum(['SCHEDULE', 'UNSCHEDULE']).openapi({ "x-enumNames": "保养,维修" });
exports.PartTypeSchema = zod_1.z.enum(['Product', 'Material']).openapi({ "x-enumNames": "成品,物料" });
exports.IncomingInspectionResultSchema = zod_1.z.enum(['Pass', 'Reject', 'Downgrade']).openapi({ "x-enumNames": "接收,拒收,让步接收" });
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
// TABLE FILTER SCHEMA
/////////////////////////////////////////
exports.TableFilterSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    path: zod_1.z.string(),
    name: zod_1.z.string(),
    filterJSON: zod_1.z.string(),
}).openapi({ "display_name": "表和查询条件的关系" });
/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////
exports.UserSchema = zod_1.z.object({
    status: exports.UserStatusSchema,
    role: exports.UserGroupSchema,
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    username: zod_1.z.string(),
    hashedPassword: zod_1.z.string().nullable(),
    hashedRefreshToken: zod_1.z.string().nullable(),
}).openapi({ "display_name": "员工", "display_column": "username" });
exports.UserWithRelationsSchema = exports.UserSchema.merge(zod_1.z.object({
    profile: zod_1.z.lazy(() => exports.UserProfileWithRelationsSchema).nullable(),
}));
/////////////////////////////////////////
// USER PROFILE SCHEMA
/////////////////////////////////////////
exports.UserProfileSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    userId: zod_1.z.number().int(),
    fullName: zod_1.z.string(),
});
exports.UserProfileWithRelationsSchema = exports.UserProfileSchema.merge(zod_1.z.object({
    user: zod_1.z.lazy(() => exports.UserWithRelationsSchema),
}));
/////////////////////////////////////////
// PRODUCT LINE SCHEMA
/////////////////////////////////////////
exports.ProductLineSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "产线名" }),
    description: zod_1.z.string().openapi({ "title": "产线描述", "column_type": "textarea" }),
}).openapi({ "primary_key": "id", "display_name": "产线", "display_column": "name" });
exports.ProductLineWithRelationsSchema = exports.ProductLineSchema.merge(zod_1.z.object({
    equipment: zod_1.z.lazy(() => exports.EquipmentWithRelationsSchema).array().openapi({ "model_name": "Equipment" }),
}));
/////////////////////////////////////////
// EQUIPMENT SCHEMA
/////////////////////////////////////////
exports.EquipmentSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "设备名" }),
    description: zod_1.z.string().openapi({ "title": "设备描述", "column_type": "textarea" }),
    repairPlan: zod_1.z.string().openapi({ "title": "维修计划", "column_type": "cron" }),
    workStation: zod_1.z.string().openapi({ "title": "工位" }),
    productLineId: zod_1.z.number().int().openapi({ "reference": "ProductLine" }),
}).openapi({ "primary_key": "id", "display_name": "设备", "display_column": "name" });
exports.EquipmentWithRelationsSchema = exports.EquipmentSchema.merge(zod_1.z.object({
    productLine: zod_1.z.lazy(() => exports.ProductLineWithRelationsSchema),
    repairMaterialInventories: zod_1.z.lazy(() => exports.RepairMaterialInventoryWithRelationsSchema).array().openapi({ "model_name": "RepairMaterialInventory" }),
    repairRecords: zod_1.z.lazy(() => exports.RepairRecordWithRelationsSchema).array().openapi({ "model_name": "RepairRecord" }),
}));
/////////////////////////////////////////
// REPAIR MATERIAL INVENTORY SCHEMA
/////////////////////////////////////////
exports.RepairMaterialInventorySchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "物料名" }),
    description: zod_1.z.string().openapi({ "title": "物料描述", "column_type": "textarea" }),
    quantity: zod_1.z.number().int().openapi({ "title": "库存数量" }),
    minimumQuantity: zod_1.z.number().int().openapi({ "title": "最小库存数量" }),
    equipmentId: zod_1.z.number().int().nullable().openapi({ "reference": "Equipment" }),
}).openapi({ "primary_key": "id", "display_name": "备品备料库存", "display_column": "name" });
exports.RepairMaterialInventoryWithRelationsSchema = exports.RepairMaterialInventorySchema.merge(zod_1.z.object({
    equipment: zod_1.z.lazy(() => exports.EquipmentWithRelationsSchema).nullable(),
}));
/////////////////////////////////////////
// REPAIR RECORD SCHEMA
/////////////////////////////////////////
exports.RepairRecordSchema = zod_1.z.object({
    type: exports.RepairTypeSchema.openapi({ "title": "类型" }),
    status: exports.RepairRecordStatusSchema.openapi({ "title": "状态" }),
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    /**
     * @schema.x-relationField equipment
     */
    equipmentId: zod_1.z.number().int().openapi({ "reference": "Equipment", "x-relationField": "equipment" }),
    description: zod_1.z.string().openapi({ "title": "备注", "column_type": "textarea" }),
}).openapi({ "primary_key": "id", "display_name": "维修记录", "display_column": "equipmentId" });
exports.RepairRecordWithRelationsSchema = exports.RepairRecordSchema.merge(zod_1.z.object({
    equipment: zod_1.z.lazy(() => exports.EquipmentWithRelationsSchema),
}));
/////////////////////////////////////////
// PART SCHEMA
/////////////////////////////////////////
exports.PartSchema = zod_1.z.object({
    partType: exports.PartTypeSchema.openapi({ "title": "类型" }),
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    no: zod_1.z.string().openapi({ "title": "零件号" }),
    name: zod_1.z.string().openapi({ "title": "零件名称" }),
}).openapi({ "display_name": "零件", "display_column": "name,no" });
exports.PartWithRelationsSchema = exports.PartSchema.merge(zod_1.z.object({
    partVersions: zod_1.z.lazy(() => exports.PartVersionWithRelationsSchema).array().openapi({ "model_name": "PartVersion" }),
    partOperation: zod_1.z.lazy(() => exports.PartOperationWithRelationsSchema).array().openapi({ "model_name": "PartOperation" }),
    workerOrders: zod_1.z.lazy(() => exports.WorkerOrderWithRelationsSchema).array().openapi({ "model_name": "WorkerOrder" }),
    nonconformItems: zod_1.z.lazy(() => exports.NonconformItemWithRelationsSchema).array().openapi({ "model_name": "NonconformItem" }),
}));
/////////////////////////////////////////
// PART VERSION SCHEMA
/////////////////////////////////////////
exports.PartVersionSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    version: zod_1.z.string().openapi({ "title": "版本号" }),
    partId: zod_1.z.number().int().openapi({ "reference": "Part" }),
    note: zod_1.z.string().nullable().openapi({ "title": "备注" }),
}).openapi({ "display_name": "零件版本", "display_column": "partId,version" });
exports.PartVersionWithRelationsSchema = exports.PartVersionSchema.merge(zod_1.z.object({
    part: zod_1.z.lazy(() => exports.PartWithRelationsSchema),
    incomingInspectionSpec: zod_1.z.lazy(() => exports.IncomingInspectionSpecWithRelationsSchema).nullable().openapi({ "reference": "IncomingInspectionSpec" }),
    receipts: zod_1.z.lazy(() => exports.ReceiptWithRelationsSchema).array().openapi({ "model_name": "Receipt" }),
}));
/////////////////////////////////////////
// INCOMING INSPECTION SPEC SCHEMA
/////////////////////////////////////////
exports.IncomingInspectionSpecSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    version: zod_1.z.string().openapi({ "title": "版本编号" }),
    /**
     * @schema.x-unique true
     */
    partVersionId: zod_1.z.number().int().openapi({ "reference": "PartVersion", "x-unique": "true" }),
}).openapi({ "display_name": "进料检验规范", "display_column": "partVersionId" });
exports.IncomingInspectionSpecWithRelationsSchema = exports.IncomingInspectionSpecSchema.merge(zod_1.z.object({
    incomingInspectionSpecItems: zod_1.z.lazy(() => exports.IncomingInspectionSpecItemWithRelationsSchema).array().openapi({ "model_name": "IncomingInspectionSpecItem" }),
    incomingInspectionRecords: zod_1.z.lazy(() => exports.IncomingInspectionRecordWithRelationsSchema).array().openapi({ "model_name": "IncomingInspectionRecord" }),
    partVersion: zod_1.z.lazy(() => exports.PartVersionWithRelationsSchema),
}));
/////////////////////////////////////////
// INCOMING INSPECTION SPEC ITEM SCHEMA
/////////////////////////////////////////
exports.IncomingInspectionSpecItemSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    no: zod_1.z.number().int().openapi({ "title": "序号" }),
    name: zod_1.z.string().openapi({ "title": "检验项目" }),
    spec: zod_1.z.string().openapi({ "title": "规格" }),
    incomingInspectionSpecId: zod_1.z.number().int().openapi({ "reference": "IncomingInspectionSpec" }),
}).openapi({ "display_name": "检验项目", "display_column": "no,name", "display_primary_key": "false" });
exports.IncomingInspectionSpecItemWithRelationsSchema = exports.IncomingInspectionSpecItemSchema.merge(zod_1.z.object({
    incomingInspectionSpec: zod_1.z.lazy(() => exports.IncomingInspectionSpecWithRelationsSchema),
    incomingInspectionRecordItems: zod_1.z.lazy(() => exports.IncomingInspectionRecordItemWithRelationsSchema).array().openapi({ "model_name": "IncomingInspectionRecordItem" }),
}));
/////////////////////////////////////////
// NONCONFORM ITEM SCHEMA
/////////////////////////////////////////
exports.NonconformItemSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    partId: zod_1.z.number().int().openapi({ "reference": "Part" }),
    description: zod_1.z.string().openapi({ "title": "不良描述" }),
    note: zod_1.z.string().nullable().openapi({ "title": "备注" }),
}).openapi({ "display_name": "不合格品记录", "display_column": "partId" });
exports.NonconformItemWithRelationsSchema = exports.NonconformItemSchema.merge(zod_1.z.object({
    part: zod_1.z.lazy(() => exports.PartWithRelationsSchema),
}));
/////////////////////////////////////////
// PART OPERATION SCHEMA
/////////////////////////////////////////
exports.PartOperationSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    no: zod_1.z.string().openapi({ "title": "工序号" }),
    partId: zod_1.z.number().int().openapi({ "reference": "Part" }),
}).openapi({ "display_name": "总成工序", "display_column": "no" });
exports.PartOperationWithRelationsSchema = exports.PartOperationSchema.merge(zod_1.z.object({
    part: zod_1.z.lazy(() => exports.PartWithRelationsSchema),
    partOperationVersions: zod_1.z.lazy(() => exports.PartOperationVersionWithRelationsSchema).array().openapi({ "model_name": "PartOperationVersion" }),
}));
/////////////////////////////////////////
// PART OPERATION VERSION SCHEMA
/////////////////////////////////////////
exports.PartOperationVersionSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    version: zod_1.z.number().int().openapi({ "title": "版本号" }),
    name: zod_1.z.string().openapi({ "title": "工序名称" }),
    partOperationId: zod_1.z.number().int().openapi({ "reference": "PartOperation" }),
}).openapi({ "display_name": "总成工序版本", "display_column": "partOperationId,name,version" });
exports.PartOperationVersionWithRelationsSchema = exports.PartOperationVersionSchema.merge(zod_1.z.object({
    partOperation: zod_1.z.lazy(() => exports.PartOperationWithRelationsSchema),
    partOperationInspectionItems: zod_1.z.lazy(() => exports.PartOperationInspectionItemWithRelationsSchema).array().openapi({ "model_name": "PartOperationInspectionItem" }),
    operationInspectionRecord: zod_1.z.lazy(() => exports.OperationInspectionRecordWithRelationsSchema).array().openapi({ "model_name": "OperationInspectionRecord" }),
}));
/////////////////////////////////////////
// PART OPERATION INSPECTION ITEM SCHEMA
/////////////////////////////////////////
exports.PartOperationInspectionItemSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    name: zod_1.z.string().openapi({ "title": "检验项目" }),
    partOperationVersionId: zod_1.z.number().int().openapi({ "reference": "PartOperationVersion" }),
}).openapi({ "display_name": "零件过程检验项目", "display_column": "name" });
exports.PartOperationInspectionItemWithRelationsSchema = exports.PartOperationInspectionItemSchema.merge(zod_1.z.object({
    partOperationVersion: zod_1.z.lazy(() => exports.PartOperationVersionWithRelationsSchema),
    operationInspectionRecordItems: zod_1.z.lazy(() => exports.OperationInspectionRecordItemWithRelationsSchema).array().openapi({ "model_name": "OperationInspectionRecordItem" }),
}));
/////////////////////////////////////////
// RECEIPT SCHEMA
/////////////////////////////////////////
exports.ReceiptSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    partVersionId: zod_1.z.number().int().openapi({ "reference": "PartVersion" }),
    lot: zod_1.z.string().openapi({ "title": "零件批号" }),
}).openapi({ "display_name": "收货单", "display_column": "partVersionId,lot" });
exports.ReceiptWithRelationsSchema = exports.ReceiptSchema.merge(zod_1.z.object({
    partVersion: zod_1.z.lazy(() => exports.PartVersionWithRelationsSchema),
    incomingInspectionRecord: zod_1.z.lazy(() => exports.IncomingInspectionRecordWithRelationsSchema).nullable().openapi({ "reference": "IncomingInspectionRecord" }),
}));
/////////////////////////////////////////
// INCOMING INSPECTION RECORD SCHEMA
/////////////////////////////////////////
exports.IncomingInspectionRecordSchema = zod_1.z.object({
    result: exports.IncomingInspectionResultSchema.nullable().openapi({ "title": "判定" }),
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    /**
     * @schema.x-unique true
     */
    receiptId: zod_1.z.number().int().openapi({ "reference": "Receipt", "x-unique": "true" }),
    incomingInspectionSpecId: zod_1.z.number().int().openapi({ "reference": "IncomingInspectionSpec" }),
    note: zod_1.z.string().nullable().openapi({ "title": "备注" }),
}).openapi({ "display_name": "进料检记录", "display_column": "receiptId" });
exports.IncomingInspectionRecordWithRelationsSchema = exports.IncomingInspectionRecordSchema.merge(zod_1.z.object({
    receipt: zod_1.z.lazy(() => exports.ReceiptWithRelationsSchema),
    incomingInspectionSpec: zod_1.z.lazy(() => exports.IncomingInspectionSpecWithRelationsSchema),
    incomingInspectionRecordItems: zod_1.z.lazy(() => exports.IncomingInspectionRecordItemWithRelationsSchema).array().openapi({ "model_name": "IncomingInspectionRecordItem" }),
}));
/////////////////////////////////////////
// INCOMING INSPECTION RECORD ITEM SCHEMA
/////////////////////////////////////////
exports.IncomingInspectionRecordItemSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    incomingInspectionRecordId: zod_1.z.number().int().openapi({ "reference": "IncomingInspectionRecord" }),
    incomingInspectionSpecItemId: zod_1.z.number().int().openapi({ "reference": "IncomingInspectionSpecItem" }),
    inspectionIteration: zod_1.z.string().openapi({ "title": "测量#" }),
    result: zod_1.z.boolean().openapi({ "title": "结果" }),
}).openapi({ "display_name": "进料检记录详情", "display_primary_key": "false" });
exports.IncomingInspectionRecordItemWithRelationsSchema = exports.IncomingInspectionRecordItemSchema.merge(zod_1.z.object({
    incomingInspectionRecord: zod_1.z.lazy(() => exports.IncomingInspectionRecordWithRelationsSchema),
    incomingInspectionSpecItem: zod_1.z.lazy(() => exports.IncomingInspectionSpecItemWithRelationsSchema),
}));
/////////////////////////////////////////
// WORKER ORDER SCHEMA
/////////////////////////////////////////
exports.WorkerOrderSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    no: zod_1.z.string().openapi({ "title": "工单号" }),
    partId: zod_1.z.number().int().openapi({ "reference": "Part" }),
    inspectorName: zod_1.z.string().nullable().openapi({ "title": "检验员" }),
    reviewerName: zod_1.z.string().nullable().openapi({ "title": "审核员" }),
}).openapi({ "display_name": "工单", "display_column": "no" });
exports.WorkerOrderWithRelationsSchema = exports.WorkerOrderSchema.merge(zod_1.z.object({
    part: zod_1.z.lazy(() => exports.PartWithRelationsSchema),
    operationInspectionRecords: zod_1.z.lazy(() => exports.OperationInspectionRecordWithRelationsSchema).array().openapi({ "model_name": "OperationInspectionRecord" }),
}));
/////////////////////////////////////////
// OPERATION INSPECTION RECORD SCHEMA
/////////////////////////////////////////
exports.OperationInspectionRecordSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    workerOrderId: zod_1.z.number().int().openapi({ "reference": "WorkerOrder" }),
    partOperationVersionId: zod_1.z.number().int().openapi({ "reference": "PartOperationVersion" }),
    note: zod_1.z.string().nullable().openapi({ "title": "备注" }),
}).openapi({ "display_name": "过程检", "display_column": "workerOrderId" });
exports.OperationInspectionRecordWithRelationsSchema = exports.OperationInspectionRecordSchema.merge(zod_1.z.object({
    workerOrder: zod_1.z.lazy(() => exports.WorkerOrderWithRelationsSchema),
    partOperationVersion: zod_1.z.lazy(() => exports.PartOperationVersionWithRelationsSchema),
    operationInspectionRecordItems: zod_1.z.lazy(() => exports.OperationInspectionRecordItemWithRelationsSchema).array().openapi({ "model_name": "OperationInspectionRecordItem" }),
}));
/////////////////////////////////////////
// OPERATION INSPECTION RECORD ITEM SCHEMA
/////////////////////////////////////////
exports.OperationInspectionRecordItemSchema = zod_1.z.object({
    id: zod_1.z.number().int(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    isDeleted: zod_1.z.boolean(),
    partOperationInspectionItemId: zod_1.z.number().int().openapi({ "reference": "PartOperationInspectionItem" }),
    operationInspectionRecordId: zod_1.z.number().int().openapi({ "reference": "OperationInspectionRecord" }),
    inspectionIteration1: zod_1.z.string().openapi({ "title": "首检#" }),
    inspectionIteration2: zod_1.z.string().openapi({ "title": "过程检1#" }),
    inspectionIteration3: zod_1.z.string().openapi({ "title": "过程检2#" }),
    inspectionIteration4: zod_1.z.string().openapi({ "title": "末检#" }),
}).openapi({ "display_name": "过程检详情" });
exports.OperationInspectionRecordItemWithRelationsSchema = exports.OperationInspectionRecordItemSchema.merge(zod_1.z.object({
    partOperationInspectionItem: zod_1.z.lazy(() => exports.PartOperationInspectionItemWithRelationsSchema),
    operationInspectionRecord: zod_1.z.lazy(() => exports.OperationInspectionRecordWithRelationsSchema),
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
tslib_1.__exportStar(__webpack_require__("../../libs/wms-services/src/services/custom.service.ts"), exports);


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
})(UserError = exports.UserError || (exports.UserError = {}));


/***/ }),

/***/ "../../libs/wms-services/src/lib/schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OperationInspectionRecordItemResourceSchema = exports.OperationInspectionRecordResourceSchema = exports.WorkerOrderResourceSchema = exports.IncomingInspectionRecordItemResourceSchema = exports.IncomingInspectionRecordResourceSchema = exports.ReceiptResourceSchema = exports.PartOperationInspectionItemResourceSchema = exports.PartOperationVersionResourceSchema = exports.PartOperationResourceSchema = exports.NonconformItemResourceSchema = exports.PartVersionResourceSchema = exports.PartResourceSchema = exports.IncomingInspectionSpecItemResourceSchema = exports.IncomingInspectionSpecResourceSchema = exports.RepairRecordResourceSchema = exports.RepairMaterialInventoryResourceSchema = exports.EquipmentResourceSchema = exports.ProductLineResourceSchema = exports.ManagerApproveSchema = exports.AddToAdminResourceSchema = exports.WorkflowUserResourceSchema = exports.ProcessDefinitionResourceSchema = exports.TaskResourceSchema = exports.TaskFormRelationResourceSchema = exports.UserResourceSchema = void 0;
const prisma_wms_1 = __webpack_require__("../../libs/prisma-wms/src/index.ts");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const zod_1 = __webpack_require__("zod");
exports.UserResourceSchema = prisma_wms_1.UserSchema.omit({
    hashedPassword: true,
    hashedRefreshToken: true,
}).extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'UserSchema',
    }),
});
exports.TaskFormRelationResourceSchema = prisma_wms_1.TaskFormRelationSchema.extend({
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
exports.WorkflowUserResourceSchema = zod_1.z
    .object({
    id: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string(),
})
    .extend({
    __meta: (0, flowda_shared_1.meta)({
        prisma: false,
    }),
})
    .openapi({
    primary_key: 'id',
    display_name: '用户',
    display_column: 'id',
});
// custom form
exports.AddToAdminResourceSchema = prisma_wms_1.UserSchema.omit({
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
exports.ProductLineResourceSchema = prisma_wms_1.ProductLineWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ProductLineSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/equipment',
    },
});
exports.EquipmentResourceSchema = prisma_wms_1.EquipmentWithRelationsSchema.extend({
    // todo: 后续可以把 prisma false 去掉，换个地方放
    status: zod_1.z.string().openapi({ title: '设备状态', prisma: false }),
    __meta: (0, flowda_shared_1.meta)({
        extends: 'EquipmentSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/equipment',
    },
});
exports.RepairMaterialInventoryResourceSchema = prisma_wms_1.RepairMaterialInventorySchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'RepairMaterialInventorySchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/equipment',
    },
});
exports.RepairRecordResourceSchema = prisma_wms_1.RepairRecordWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'RepairRecordSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/equipment',
    },
});
exports.IncomingInspectionSpecResourceSchema = prisma_wms_1.IncomingInspectionSpecWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'IncomingInspectionSpecSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.IncomingInspectionSpecItemResourceSchema = prisma_wms_1.IncomingInspectionSpecItemWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'IncomingInspectionSpecItemSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.PartResourceSchema = prisma_wms_1.PartWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'PartSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.PartVersionResourceSchema = prisma_wms_1.PartVersionWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'PartVersionSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.NonconformItemResourceSchema = prisma_wms_1.NonconformItemWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'NonconformItemSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.PartOperationResourceSchema = prisma_wms_1.PartOperationWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'PartOperationSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.PartOperationVersionResourceSchema = prisma_wms_1.PartOperationVersionWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'PartOperationVersionSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.PartOperationInspectionItemResourceSchema = prisma_wms_1.PartOperationInspectionItemWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'PartOperationInspectionItemSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.ReceiptResourceSchema = prisma_wms_1.ReceiptWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'ReceiptSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.IncomingInspectionRecordResourceSchema = prisma_wms_1.IncomingInspectionRecordWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'IncomingInspectionRecordSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.IncomingInspectionRecordItemResourceSchema = prisma_wms_1.IncomingInspectionRecordItemWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'IncomingInspectionRecordItemSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.WorkerOrderResourceSchema = prisma_wms_1.WorkerOrderWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'WorkerOrderSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.OperationInspectionRecordResourceSchema = prisma_wms_1.OperationInspectionRecordWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'OperationInspectionRecordSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});
exports.OperationInspectionRecordItemResourceSchema = prisma_wms_1.OperationInspectionRecordItemWithRelationsSchema.extend({
    __meta: (0, flowda_shared_1.meta)({
        extends: 'OperationInspectionRecordItemSchema',
    }),
}).openapi({
    custom: {
        route_prefix: '/resources/quality_management',
    },
});


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
    ACCESS_TOKEN_EXPIRE: zod_1.z.number().default(25 * 60),
    C7_REST_URL: zod_1.z.string().min(1),
});


/***/ }),

/***/ "../../libs/wms-services/src/services/custom.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var CustomService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomService = exports.CreateOperationInspectionRecordSchemaDto = exports.CreateIncomingInspectionRecordSchemaDto = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
const db = tslib_1.__importStar(__webpack_require__("@prisma/client-wms"));
const _ = tslib_1.__importStar(__webpack_require__("lodash"));
const nestjs_zod_1 = __webpack_require__("nestjs-zod");
const zod_1 = __webpack_require__("zod");
const CreateIncomingInspectionRecordSchema = zod_1.z.object({
    incomingInspectionSpecId: zod_1.z.number(),
    receiptId: zod_1.z.number(),
});
const CreateOperationInspectionRecordSchema = zod_1.z.object({
    workerOrderId: zod_1.z.number(),
    // reviewerName: z.string(),
    // inspectorName: z.string(),
});
class CreateIncomingInspectionRecordSchemaDto extends (0, nestjs_zod_1.createZodDto)(CreateIncomingInspectionRecordSchema) {
}
exports.CreateIncomingInspectionRecordSchemaDto = CreateIncomingInspectionRecordSchemaDto;
class CreateOperationInspectionRecordSchemaDto extends (0, nestjs_zod_1.createZodDto)(CreateOperationInspectionRecordSchema) {
}
exports.CreateOperationInspectionRecordSchemaDto = CreateOperationInspectionRecordSchemaDto;
let CustomService = CustomService_1 = class CustomService {
    constructor(prisma, data, loggerFactory) {
        this.prisma = prisma;
        this.data = data;
        this.logger = loggerFactory(CustomService_1.name);
    }
    getProductLineAndEquipment() {
        return this.prisma.productLine.findMany({
            where: {
                isDeleted: false,
            },
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                equipment: {
                    where: {
                        isDeleted: false,
                    },
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });
    }
    getEquipmentList(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.data.get(query['path'], query);
            const ids = data.map((item) => item.id);
            const records = yield this.prisma.repairRecord.findMany({
                where: {
                    equipmentId: { in: ids },
                },
            });
            const groupedData = _.groupBy(records, 'equipmentId');
            const ret = data.map((item) => {
                const records = groupedData[String(item.id)];
                item.status = _.some(records, item => item.status !== db.RepairRecordStatus.DONE) ? '不可用' : '可用';
                return item;
            });
            return ret;
        });
    }
    getEquipment(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const data = yield this.data.get(query['path'], query);
            const records = yield this.prisma.repairRecord.findMany({
                where: {
                    equipmentId: data.id,
                },
            });
            data.status = _.some(records, item => item.status !== db.RepairRecordStatus.DONE) ? '不可用' : '可用';
            return data;
        });
    }
    createIncomingInspectionRecord(opt) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ret = yield this.prisma.incomingInspectionSpec.findUnique({
                where: {
                    id: opt.incomingInspectionSpecId,
                },
                include: {
                    incomingInspectionSpecItems: {
                        where: {
                            isDeleted: false,
                        },
                        orderBy: {
                            no: 'asc',
                        },
                    },
                },
            });
            if (ret != null) {
                const incomingInspectionRecordItems = ret.incomingInspectionSpecItems.map(item => ({
                    incomingInspectionSpecItemId: item.id,
                    inspectionIteration: '',
                    result: false,
                }));
                yield this.prisma.incomingInspectionRecord.create({
                    data: {
                        incomingInspectionSpecId: opt.incomingInspectionSpecId,
                        receiptId: opt.receiptId,
                        incomingInspectionRecordItems: {
                            create: incomingInspectionRecordItems,
                        },
                    },
                    include: {
                        incomingInspectionRecordItems: true,
                    },
                });
            }
            return {};
        });
    }
    createOperationInspectionRecord(opt) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const woRet0 = yield this.prisma.workerOrder.findFirst({
                where: {
                    id: opt.workerOrderId,
                },
                include: {
                    operationInspectionRecords: true,
                },
            });
            if (woRet0 && woRet0.operationInspectionRecords.length > 0) {
                throw new Error(`工单 ${woRet0.no} 已有过程检记录`);
            }
            const woRet = yield this.prisma.workerOrder.findUnique({
                where: {
                    id: opt.workerOrderId,
                },
                include: {
                    part: {
                        include: {
                            partOperation: {
                                include: {
                                    partOperationVersions: {
                                        orderBy: {
                                            version: 'desc',
                                        },
                                        take: 1,
                                        include: {
                                            partOperationInspectionItems: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (woRet != null) {
                return this.prisma.$transaction((tx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    for (const partOperation of woRet.part.partOperation) {
                        const operationInspectionRecordItems = partOperation.partOperationVersions[0].partOperationInspectionItems.map(item => ({
                            inspectionIteration1: '',
                            inspectionIteration2: '',
                            inspectionIteration3: '',
                            inspectionIteration4: '',
                            partOperationInspectionItemId: item.id,
                        }));
                        yield tx.operationInspectionRecord.create({
                            data: {
                                workerOrderId: opt.workerOrderId,
                                // inspectorName: opt.inspectorName,
                                // reviewerName: opt.reviewerName,
                                partOperationVersionId: partOperation.partOperationVersions[0].id,
                                operationInspectionRecordItems: {
                                    create: operationInspectionRecordItems,
                                },
                            },
                        });
                    }
                }));
            }
            return {};
        });
    }
    test() {
        return this.prisma.workerOrder.findUnique({
            where: {
                id: 1,
            },
            include: {
                part: {
                    include: {
                        partOperation: {
                            include: {
                                partOperationVersions: {
                                    orderBy: {
                                        version: 'desc',
                                    },
                                    take: 1,
                                    include: {
                                        partOperationInspectionItems: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
};
CustomService = CustomService_1 = tslib_1.__decorate([
    (0, inversify_1.injectable)(),
    tslib_1.__param(0, (0, inversify_1.inject)(flowda_shared_1.PrismaClientSymbol)),
    tslib_1.__param(1, (0, inversify_1.inject)(flowda_shared_1.DataService)),
    tslib_1.__param(2, (0, inversify_1.inject)('Factory<Logger>')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof db !== "undefined" && db.PrismaClient) === "function" ? _a : Object, typeof (_b = typeof flowda_shared_1.DataService !== "undefined" && flowda_shared_1.DataService) === "function" ? _b : Object, Function])
], CustomService);
exports.CustomService = CustomService;


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
const common_1 = __webpack_require__("@nestjs/common");
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
            // if (WMS_ENV.TEST_ENV !== 'yes') {
            //   try {
            //     await axios.post(WMS_ENV.C7_REST_URL + `/user/create`, {
            //       profile: {
            //         id: dto.username,
            //       },
            //       credentials: {
            //         password: dto.password,
            //       },
            //     })
            //   } catch (e) {
            //     this.logger.error('call c7 failed:/user/create:' + dto.username)
            //     throw e
            //   }
            // }
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
                throw new common_1.UnauthorizedException({ reason: 'User does not exist', username });
            }
            if (!user.hashedPassword) {
                throw new common_1.UnauthorizedException({ reason: 'Password is not initialized', username });
            }
            const match = yield bcrypt.compare(password, user.hashedPassword);
            if (!match) {
                throw new common_1.UnauthorizedException({ reason: 'Username and password is not matched', username });
            }
            const payload = { uid: user.id };
            const rt = this.generateJwt(payload, wms_env_1.WMS_ENV.REFRESH_TOKEN_SECRET, wms_env_1.WMS_ENV.REFRESH_TOKEN_EXPIRE);
            user.hashedRefreshToken = rt.token;
            yield this.prisma.user.update({
                where: { id: user.id },
                data: user,
            });
            const at = this.generateJwt(payload, wms_env_1.WMS_ENV.ACCESS_TOKEN_SECRET, wms_env_1.WMS_ENV.ACCESS_TOKEN_EXPIRE);
            this.logger.log('validate pass:' + username);
            return {
                username: user.username,
                refresh_token: rt.token,
                access_token: at.token,
            };
        });
    }
    generateJwt(payload, secret, expires) {
        const exp0 = Date.now() + expires * 1000;
        const token = jwt.sign(Object.assign(Object.assign({}, payload), { exp0 }), secret, {
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
    findByUsername(username) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.prisma.user.findFirstOrThrow({
                where: {
                    username,
                },
            });
        });
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
const custom_service_1 = __webpack_require__("../../libs/wms-services/src/services/custom.service.ts");
exports.wmsServiceModule = new inversify_1.ContainerModule((bind) => {
    bind(flowda_shared_1.PrismaZodSchemaSymbol).toConstantValue(prisma_wms_1.zt);
    bind(flowda_shared_1.CustomZodSchemaSymbol).toConstantValue(schema);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, task_service_1.TaskService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, user_service_1.UserService);
    (0, flowda_shared_1.bindService)(bind, flowda_shared_1.ServiceSymbol, custom_service_1.CustomService);
});


/***/ }),

/***/ "@anatine/zod-openapi":
/***/ ((module) => {

module.exports = require("@anatine/zod-openapi");

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
const flowda_shared_1 = __webpack_require__("../../libs/flowda-shared/src/index.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const user = app.get(wms_services_1.UserService);
        const auth = app.get(flowda_shared_1.AuthService);
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
                            auth.setPayload(authed);
                            next();
                        }
                        else {
                            auth.setPayload(null);
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