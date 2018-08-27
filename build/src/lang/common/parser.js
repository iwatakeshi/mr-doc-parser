"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parser {
    constructor(source, options) {
        this.source_ = source;
        this.options = Object.assign((options || {}), {
            log: {
                enabled: true,
                levels: ['info', 'warn', 'error']
            },
            documentation: {}
        });
    }
    get source() { return this.source_; }
}
exports.default = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xhbmcvY29tbW9uL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLE1BQThCLE1BQU07SUFHbEMsWUFBWSxNQUFjLEVBQUUsT0FBK0I7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQzVDLEdBQUcsRUFBRTtnQkFDSCxPQUFPLEVBQUUsSUFBSTtnQkFDYixNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQzthQUNwQjtZQUNmLGFBQWEsRUFBRSxFQUNPO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLE1BQU0sS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBRzlDO0FBakJELHlCQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb3VyY2UgZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvU291cmNlXCI7XG5pbXBvcnQgeyBUcmVlIH0gZnJvbSBcInRyZWUtc2l0dGVyXCI7XG5pbXBvcnQgQVNUTm9kZSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9BU1ROb2RlXCI7XG5pbXBvcnQgeyBMb2dPcHRpb25zIH0gZnJvbSBcIm1yLWRvYy11dGlsc1wiO1xuaW1wb3J0IHsgWERvY1BhcnNlck9wdGlvbnMgfSBmcm9tIFwieGRvYy1wYXJzZXIvc3JjL1hEb2NQYXJzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZXJPcHRpb25zIHtcbiAgbG9nOiBMb2dPcHRpb25zLFxuICBkb2N1bWVudGF0aW9uOiBYRG9jUGFyc2VyT3B0aW9uc1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBQYXJzZXIge1xuICBwcml2YXRlIHNvdXJjZV86IFNvdXJjZVxuICBwcm90ZWN0ZWQgb3B0aW9uczogUGFyc2VyT3B0aW9uc1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IFNvdXJjZSwgb3B0aW9uczogUGFydGlhbDxQYXJzZXJPcHRpb25zPikge1xuICAgIHRoaXMuc291cmNlXyA9IHNvdXJjZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKChvcHRpb25zIHx8IHt9KSwge1xuICAgICAgbG9nOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGxldmVsczogWydpbmZvJywgJ3dhcm4nLCAnZXJyb3InXVxuICAgICAgfSBhcyBMb2dPcHRpb25zLFxuICAgICAgZG9jdW1lbnRhdGlvbjoge1xuICAgICAgfSBhcyBYRG9jUGFyc2VyT3B0aW9uc1xuICAgIH0pO1xuICB9XG4gIGdldCBzb3VyY2UoKTogU291cmNlIHsgcmV0dXJuIHRoaXMuc291cmNlXzsgfVxuICBhYnN0cmFjdCBwYXJzZSgpOiBBU1ROb2RlW11cbiAgYWJzdHJhY3QgZ2V0IHRyZWUoKTogVHJlZVxufSJdfQ==