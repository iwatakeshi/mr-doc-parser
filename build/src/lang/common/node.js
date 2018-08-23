"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(syntaxNode) {
        this.syntaxNode = syntaxNode;
        this.visit = (visitor) => {
            visitor.visitNode(this.syntaxNode);
        };
    }
}
exports.Node = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9sYW5nL2NvbW1vbi9ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBYUEsTUFBYSxJQUFJO0lBQ2YsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN6QyxVQUFLLEdBQUcsQ0FBQyxPQUFvQixFQUFRLEVBQUU7WUFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFBO0lBSDRDLENBQUM7Q0FJL0M7QUFMRCxvQkFLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFTVE5vZGUgfSBmcm9tIFwiLi9hc3RcIjtcclxuaW1wb3J0IHsgU3ludGF4Tm9kZSB9IGZyb20gXCJ0cmVlLXNpdHRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlU2l0dGVyTm9kZSB7XHJcbiAgdmlzaXQodmlzaXRvcjogTm9kZVZpc2l0b3IpOiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm9kZVZpc2l0b3Ige1xyXG4gIGdldEFTVCgpOiBBU1ROb2RlW11cclxuICB2aXNpdE5vZGUobm9kZTogU3ludGF4Tm9kZSwgcHJvcGVydGllcz86IG9iamVjdCk6IEFTVE5vZGVcclxuICB2aXNpdENoaWxkcmVuKG5vZGVzOiBTeW50YXhOb2RlW10sIHByb3BlcnRpZXM/OiBvYmplY3QpOiBBU1ROb2RlW11cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vZGUgaW1wbGVtZW50cyBUcmVlU2l0dGVyTm9kZSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHN5bnRheE5vZGU6IFN5bnRheE5vZGUpIHsgfVxyXG4gIHZpc2l0ID0gKHZpc2l0b3I6IE5vZGVWaXNpdG9yKTogdm9pZCA9PiB7XHJcbiAgICB2aXNpdG9yLnZpc2l0Tm9kZSh0aGlzLnN5bnRheE5vZGUpO1xyXG4gIH1cclxufSJdfQ==