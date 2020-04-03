self.addEventLister("install", (e) => 
                   {
    console.log("installing " e);
});

self.addEventLister("fetch", (e) =>
                   {
    console.log("fetching", e);
});
