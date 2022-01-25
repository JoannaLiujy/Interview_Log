const cacheMap = new Map();

function EnableCache(target, name, descriptor) {
    const val = descriptor.value;
    descriptor.value = async function (...args) {
        const cacheKey = name + JSON.stringify(args);
        if (!cacheMap.get(cacheKey)) {
            const cacheValue = Promise.resolve(val.apply(this, args)).catch(_ => cacheMap.set(cacheKey, null));
            cacheMap.set(cacheKey, cacheValue);
        }
        return cacheMap.get(cacheKey);
    };
    return descriptor;
}

class PromiseClass {
    @EnableCache
    static async getInfo() {
        console.log(Math.random())
    }
}

PromiseClass.getInfo();
PromiseClass.getInfo();
PromiseClass.getInfo();
PromiseClass.getInfo();
PromiseClass.getInfo();
PromiseClass.getInfo();