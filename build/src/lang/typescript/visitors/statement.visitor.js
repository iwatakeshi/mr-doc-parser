"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_visitor_1 = require("./node.visitor");
const match_1 = require("../../../utils/match");
const log_1 = require("../../../utils/log");
function visitStatement(source, node, comment, properties) {
    switch (node.type) {
        case 'expression_statement':
            return visitExpressionStatement(source, node, comment, properties);
        case 'export_statement':
            return visitExportStatement(source, node, comment);
        default:
            log_1.default.report(source, node, log_1.ErrorType.NodeTypeNotSupported);
            break;
    }
}
exports.visitStatement = visitStatement;
function visitExpressionStatement(source, node, comment, properties) {
    return node_visitor_1.visitNode(source, node.children.shift(), comment, properties);
}
exports.visitExpressionStatement = visitExpressionStatement;
function visitExportStatement(source, node, comment) {
    let children = node.children, isDefaultExport = false;
    if (children.length > 1 && match_1.default(children.shift(), 'export')) {
    }
    if (children.length > 1 && match_1.default(children.shift(), 'default')) {
        isDefaultExport = true;
    }
    return node_visitor_1.visitNode(source, children.shift(), comment, {
        exports: {
            export: true,
            default: isDefaultExport
        }
    });
}
exports.visitExportStatement = visitExportStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVtZW50LnZpc2l0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGFuZy90eXBlc2NyaXB0L3Zpc2l0b3JzL3N0YXRlbWVudC52aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQTJDO0FBQzNDLGdEQUF5QztBQUV6Qyw0Q0FBb0Q7QUFHcEQsU0FBZ0IsY0FBYyxDQUM1QixNQUFhLEVBQ2IsSUFBZ0IsRUFDaEIsT0FBbUIsRUFDbkIsVUFBbUM7SUFFbkMsUUFBTyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2hCLEtBQUssc0JBQXNCO1lBQ3pCLE9BQU8sd0JBQXdCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckUsS0FBSyxrQkFBa0I7WUFDckIsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JEO1lBQ0UsYUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3pELE1BQU07S0FDVDtBQUNILENBQUM7QUFmRCx3Q0FlQztBQUVELFNBQWdCLHdCQUF3QixDQUN0QyxNQUFhLEVBQ2IsSUFBZ0IsRUFDaEIsT0FBbUIsRUFDbkIsVUFBbUM7SUFFbkMsT0FBTyx3QkFBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBUEQsNERBT0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FDbEMsTUFBYSxFQUNiLElBQWdCLEVBQ2hCLE9BQW1CO0lBRW5CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQzFCLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFFMUIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0tBQzdEO0lBRUQsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1FBQzdELGVBQWUsR0FBRyxJQUFJLENBQUM7S0FDeEI7SUFDRCxPQUFPLHdCQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUU7UUFDbEQsT0FBTyxFQUFFO1lBQ1AsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsZUFBZTtTQUN6QjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFwQkQsb0RBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ludGF4Tm9kZSB9IGZyb20gXCJ0cmVlLXNpdHRlclwiO1xyXG5pbXBvcnQgeyB2aXNpdE5vZGUgfSBmcm9tIFwiLi9ub2RlLnZpc2l0b3JcIjtcclxuaW1wb3J0IG1hdGNoIGZyb20gXCIuLi8uLi8uLi91dGlscy9tYXRjaFwiO1xyXG5pbXBvcnQgeyBOb2RlUHJvcGVydGllcyB9IGZyb20gXCIuLi9Ob2RlXCI7XHJcbmltcG9ydCBsb2csIHsgRXJyb3JUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xvZ1wiO1xyXG5pbXBvcnQgSUZpbGUgZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvSUZpbGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2aXNpdFN0YXRlbWVudChcclxuICBzb3VyY2U6IElGaWxlLFxyXG4gIG5vZGU6IFN5bnRheE5vZGUsXHJcbiAgY29tbWVudDogU3ludGF4Tm9kZSxcclxuICBwcm9wZXJ0aWVzOiBQYXJ0aWFsPE5vZGVQcm9wZXJ0aWVzPlxyXG4pIHtcclxuICBzd2l0Y2gobm9kZS50eXBlKSB7XHJcbiAgICBjYXNlICdleHByZXNzaW9uX3N0YXRlbWVudCc6XHJcbiAgICAgIHJldHVybiB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQoc291cmNlLCBub2RlLCBjb21tZW50LCBwcm9wZXJ0aWVzKTtcclxuICAgIGNhc2UgJ2V4cG9ydF9zdGF0ZW1lbnQnOlxyXG4gICAgICByZXR1cm4gdmlzaXRFeHBvcnRTdGF0ZW1lbnQoc291cmNlLCBub2RlLCBjb21tZW50KTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGxvZy5yZXBvcnQoc291cmNlLCBub2RlLCBFcnJvclR5cGUuTm9kZVR5cGVOb3RTdXBwb3J0ZWQpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQoXHJcbiAgc291cmNlOiBJRmlsZSxcclxuICBub2RlOiBTeW50YXhOb2RlLFxyXG4gIGNvbW1lbnQ6IFN5bnRheE5vZGUsXHJcbiAgcHJvcGVydGllczogUGFydGlhbDxOb2RlUHJvcGVydGllcz5cclxuKSB7XHJcbiAgcmV0dXJuIHZpc2l0Tm9kZShzb3VyY2UsIG5vZGUuY2hpbGRyZW4uc2hpZnQoKSwgY29tbWVudCwgcHJvcGVydGllcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2aXNpdEV4cG9ydFN0YXRlbWVudChcclxuICBzb3VyY2U6IElGaWxlLFxyXG4gIG5vZGU6IFN5bnRheE5vZGUsXHJcbiAgY29tbWVudDogU3ludGF4Tm9kZSxcclxuKSB7XHJcbiAgbGV0IGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlbixcclxuICAgIGlzRGVmYXVsdEV4cG9ydCA9IGZhbHNlO1xyXG5cclxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMSAmJiBtYXRjaChjaGlsZHJlbi5zaGlmdCgpLCAnZXhwb3J0JykpIHtcclxuICB9XHJcblxyXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPiAxICYmIG1hdGNoKGNoaWxkcmVuLnNoaWZ0KCksICdkZWZhdWx0JykpIHtcclxuICAgIGlzRGVmYXVsdEV4cG9ydCA9IHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiB2aXNpdE5vZGUoc291cmNlLCBjaGlsZHJlbi5zaGlmdCgpLCBjb21tZW50LCB7XHJcbiAgICBleHBvcnRzOiB7XHJcbiAgICAgIGV4cG9ydDogdHJ1ZSxcclxuICAgICAgZGVmYXVsdDogaXNEZWZhdWx0RXhwb3J0XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iXX0=