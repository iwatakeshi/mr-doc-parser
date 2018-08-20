"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const match_1 = require("./match");
exports.XDocRegex = /@(\w+)([^{[(\n]*)?([\{\[\(][\s\S]*[\}\]\)]([\s]*(=|-)>.*)?)?([\s]*-(.)*)?/gmi;
function isLegalComment(source, node) {
    const possibleTexts = [
        'copyright',
        'terms and conditions',
        'license',
        'all rights reserved'
    ];
    if (match_1.default(node, 'comment')) {
        return possibleTexts.map(text => source.text
            .substring(node.startIndex, node.endIndex)
            .toLowerCase()
            .includes(text)).includes(true);
    }
}
exports.isLegalComment = isLegalComment;
function isJavaDocComment(source, node) {
    const comment = source.text.substring(node.startIndex, node.endIndex);
    // regexr.com/3ejvb
    return /(\/\*\*)((\s*)(.*?)(\s))*(\*\/)/.test(comment);
}
exports.isJavaDocComment = isJavaDocComment;
function isXDocComment(source, node) {
    let comment = source;
    if (node)
        comment = source.substring(node.startIndex, node.endIndex);
    return exports.XDocRegex.test(comment);
}
exports.isXDocComment = isXDocComment;
function isXDocCommentBlock(source, node) {
    const comment = source.substring(node.startIndex, node.endIndex);
    return /#API/.test(comment) || /\`\`\`xdoc/.test(comment);
}
exports.isXDocCommentBlock = isXDocCommentBlock;
function isXDocCommentFragment(source, node) {
    return !isXDocCommentBlock(source, node) && isXDocComment(source, node);
}
exports.isXDocCommentFragment = isXDocCommentFragment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQTRCO0FBR2YsUUFBQSxTQUFTLEdBQUcsOEVBQThFLENBQUM7QUFFeEcsU0FBZ0IsY0FBYyxDQUFFLE1BQWEsRUFBRSxJQUFnQjtJQUM3RCxNQUFNLGFBQWEsR0FBRztRQUNwQixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLFNBQVM7UUFDVCxxQkFBcUI7S0FDdEIsQ0FBQztJQUNGLElBQUksZUFBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRTtRQUMxQixPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDOUIsTUFBTSxDQUFDLElBQUk7YUFDUixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3pDLFdBQVcsRUFBRTthQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FDbEIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEI7QUFDSCxDQUFDO0FBZkQsd0NBZUM7QUFFRCxTQUFnQixnQkFBZ0IsQ0FBQyxNQUFhLEVBQUUsSUFBZ0I7SUFDOUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsbUJBQW1CO0lBQ25CLE9BQU8saUNBQWlDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxNQUFhLEVBQUUsSUFBaUI7SUFDNUQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLElBQUksSUFBSTtRQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8saUJBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUpELHNDQUlDO0FBRUQsU0FBZ0Isa0JBQWtCLENBQUMsTUFBYyxFQUFFLElBQWdCO0lBQ2pFLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDM0QsQ0FBQztBQUhELGdEQUdDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsTUFBYyxFQUFFLElBQWdCO0lBQ3BFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxRSxDQUFDO0FBRkQsc0RBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW50YXhOb2RlIH0gZnJvbSBcInRyZWUtc2l0dGVyXCI7XHJcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9tYXRjaFwiO1xyXG5pbXBvcnQgSUZpbGUgZnJvbSBcIi4uL2ludGVyZmFjZXMvSUZpbGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBYRG9jUmVnZXggPSAvQChcXHcrKShbXntbKFxcbl0qKT8oW1xce1xcW1xcKF1bXFxzXFxTXSpbXFx9XFxdXFwpXShbXFxzXSooPXwtKT4uKik/KT8oW1xcc10qLSguKSopPy9nbWk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNMZWdhbENvbW1lbnQgKHNvdXJjZTogSUZpbGUsIG5vZGU6IFN5bnRheE5vZGUpIHtcclxuICBjb25zdCBwb3NzaWJsZVRleHRzID0gW1xyXG4gICAgJ2NvcHlyaWdodCcsXHJcbiAgICAndGVybXMgYW5kIGNvbmRpdGlvbnMnLFxyXG4gICAgJ2xpY2Vuc2UnLFxyXG4gICAgJ2FsbCByaWdodHMgcmVzZXJ2ZWQnXHJcbiAgXTtcclxuICBpZiAobWF0Y2gobm9kZSwgJ2NvbW1lbnQnKSkge1xyXG4gICAgcmV0dXJuIHBvc3NpYmxlVGV4dHMubWFwKHRleHQgPT5cclxuICAgICAgc291cmNlLnRleHRcclxuICAgICAgICAuc3Vic3RyaW5nKG5vZGUuc3RhcnRJbmRleCwgbm9kZS5lbmRJbmRleClcclxuICAgICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIC5pbmNsdWRlcyh0ZXh0KVxyXG4gICAgKS5pbmNsdWRlcyh0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0phdmFEb2NDb21tZW50KHNvdXJjZTogSUZpbGUsIG5vZGU6IFN5bnRheE5vZGUpIHtcclxuICBjb25zdCBjb21tZW50ID0gc291cmNlLnRleHQuc3Vic3RyaW5nKG5vZGUuc3RhcnRJbmRleCwgbm9kZS5lbmRJbmRleCk7XHJcbiAgLy8gcmVnZXhyLmNvbS8zZWp2YlxyXG4gIHJldHVybiAvKFxcL1xcKlxcKikoKFxccyopKC4qPykoXFxzKSkqKFxcKlxcLykvLnRlc3QoY29tbWVudClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzWERvY0NvbW1lbnQoc291cmNlOnN0cmluZywgbm9kZT86IFN5bnRheE5vZGUpIHtcclxuICBsZXQgY29tbWVudCA9IHNvdXJjZTtcclxuICBpZiAobm9kZSkgY29tbWVudCA9IHNvdXJjZS5zdWJzdHJpbmcobm9kZS5zdGFydEluZGV4LCBub2RlLmVuZEluZGV4KTtcclxuICByZXR1cm4gWERvY1JlZ2V4LnRlc3QoY29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1hEb2NDb21tZW50QmxvY2soc291cmNlOiBzdHJpbmcsIG5vZGU6IFN5bnRheE5vZGUpIHtcclxuICBjb25zdCBjb21tZW50ID0gc291cmNlLnN1YnN0cmluZyhub2RlLnN0YXJ0SW5kZXgsIG5vZGUuZW5kSW5kZXgpO1xyXG4gIHJldHVybiAvI0FQSS8udGVzdChjb21tZW50KSB8fCAvXFxgXFxgXFxgeGRvYy8udGVzdChjb21tZW50KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNYRG9jQ29tbWVudEZyYWdtZW50KHNvdXJjZTogc3RyaW5nLCBub2RlOiBTeW50YXhOb2RlKSB7XHJcbiAgcmV0dXJuICFpc1hEb2NDb21tZW50QmxvY2soc291cmNlLCBub2RlKSAmJiBpc1hEb2NDb21tZW50KHNvdXJjZSwgbm9kZSk7XHJcbn0iXX0=