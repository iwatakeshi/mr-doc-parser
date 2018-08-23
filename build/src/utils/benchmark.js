"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function benchmark(label, f, ...args) {
    console.time(label);
    const result = f.apply(null, args);
    console.timeEnd(label);
    return result;
}
exports.default = benchmark;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuY2htYXJrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2JlbmNobWFyay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQXdCLFNBQVMsQ0FDL0IsS0FBYSxFQUNiLENBQWUsRUFDZixHQUFHLElBQVU7SUFFYixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ25CLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQVRELDRCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmVuY2htYXJrPFQsIFQyPihcbiAgbGFiZWw6IHN0cmluZyxcbiAgZjogKHg6IFQyKSA9PiBULFxuICAuLi5hcmdzOiBUMltdXG4pOiBUIHtcbiAgY29uc29sZS50aW1lKGxhYmVsKVxuICBjb25zdCByZXN1bHQgPSBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICBjb25zb2xlLnRpbWVFbmQobGFiZWwpO1xuICByZXR1cm4gcmVzdWx0O1xufSJdfQ==