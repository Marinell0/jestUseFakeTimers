const getTodayMidnight = () => {
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    const newDate = new Date(Date.UTC(year, month, day));

    return newDate.getTime();
};

describe("getTodayMidnight", () => {
    it("fails as jest gives a TypeError: Cannot assign to read only property 'performance' of object '[object global]'", () => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2022-04-19 22:09:01"));
        const actual = getTodayMidnight();

        expect(actual).toBe(1649116800000);
        jest.useRealTimers();
    });
});
