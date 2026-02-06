// module.exports = async function(context, commands){

//     //================================ CONFIG ================================ 
//     const CONFIG = {
//         BASE_URL: 'https://petstore.octoperf.com/',
//         USERNAME: 'j2ee',
//         PASSWORD: 'j2ee'
//     };
    
//     //================================ SELECTORS ================================ 
//     const SELECTORS = {
//         ENTER_STORE: "//a[contains(@href, 'actions')]",
//         SIGN_IN: "//a[contains(@href, 'signonForm')]",
//         USERNAME: "//input[@name = 'username']",
//         PASSWORD: "//input[@name = 'password']",
//         LOGIN_BUTTON: "//input[@name = 'signon']",
//         SIGN_OUT: "//a[contains(@href, 'signoff')]",

//         CATEGORY_CATS: "//a[contains(@href, 'categoryId=CATS')]",
//         PRODUCT: "//a[contains(@href, 'productId=FL-DLH-02')]",
//         ITEM: "//a[contains(@href, 'itemId=EST-17')]",

//         ADD_TO_CART: "//a[contains(@href, 'addItemToCart')]",
//         CHECKOUT: "//a[contains(@href, 'newOrderForm')]",
//         CONTINUE: "//input[@name='newOrder']",
//         CONFIRM_ORDER: "//a[contains(@href, 'confirmed=true')]"
//     };

//     //================================ HELPERS ================================ 
//     async function measureStep(stepName, action, waitFor){
//         context.log.info(`${stepName}`);
//         await commands.measure.start(stepName);
//         await action();
//         if (waitFor) {
//             await commands.wait.forElementXpath(waitFor);
//         }
//         await commands.measure.stop();
//     }

//     //================================ FLOW ================================ 

//     await measureStep(
//         'open welcome page',
//         () => commands.navigate(CONFIG.BASE_URL),
//         SELECTORS.ENTER_STORE
//     );

//     // await measureStep(
//     //     'open welcome page',
//     //     () => commands.navigate(CONFIG.BASE_URL),
//     //     SELECTORS.SIGN_IN
//     // );

//     await measureStep(
//         'click on Enter the Store',
//         () => commands.click.byXpath(SELECTORS.ENTER_STORE),
//         SELECTORS.SIGN_IN
//     );

//     await measureStep(
//         'sign in',
//         async () => {
//             await commands.click.byXpath(SELECTORS.SIGN_IN);
//             await commands.wait.forElementXpath(SELECTORS.USERNAME);
//             await commands.addText.byXpath(SELECTORS.USERNAME, CONFIG.USERNAME);
//             // await commands.clear.byXpath(SELECTORS.PASSWORD);
//             await commands.addText.byXpath(SELECTORS.PASSWORD, CONFIG.PASSWORD);
//             await commands.click.byXpath(SELECTORS.LOGIN_BUTTON);
//         },
//         SELECTORS.SIGN_OUT
//     );

//     await measureStep(
//         'select cat category',
//         () => commands.click.byXpath(SELECTORS.CATEGORY_CATS),
//         SELECTORS.PRODUCT
//     );

//     await measureStep(
//         'select persian product',
//         () => commands.click.byXpath(SELECTORS.PRODUCT),
//         SELECTORS.ITEM
//     );

//     await measureStep(
//         'select adult male persian item',
//         () => commands.click.byXpath(SELECTORS.ITEM),
//         SELECTORS.ADD_TO_CART

//     );

//     await measureStep(
//         'add to cart',
//         () => commands.click.byXpath(SELECTORS.ADD_TO_CART),
//         SELECTORS.CHECKOUT
//     );

//     await measureStep(
//         'proceed to checkout',
//         () => commands.click.byXpath(SELECTORS.CHECKOUT),
//         SELECTORS.CONTINUE
//     );

//     await measureStep(
//         'enter details and click on continue',
//         () => commands.click.byXpath(SELECTORS.CONTINUE),
//         SELECTORS.CONFIRM_ORDER
//     );

//     await measureStep(
//         'click on confirm',
//         () => commands.click.byXpath(SELECTORS.CONFIRM_ORDER),
//         SELECTORS.SIGN_OUT
//     );

//     await measureStep(
//         'click on sign out',
//         () => commands.click.byXpath(SELECTORS.SIGN_OUT),
//         SELECTORS.SIGN_IN
//     );
// };


export default async function(context, commands) {
    //================================ CONFIG ================================ 
    const CONFIG = {
        BASE_URL: 'https://petstore.octoperf.com/',
        USERNAME: 'j2ee',
        PASSWORD: 'j2ee'
    };
    
    //================================ SELECTORS ================================ 
    const SELECTORS = {
        ENTER_STORE: "//a[normalize-space()='Enter the Store']",
        SIGN_IN: "//a[contains(@href, 'signonForm')]",
        USERNAME: "//input[@name = 'username']",
        PASSWORD: "//input[@name = 'password']",
        LOGIN_BUTTON: "//input[@name = 'signon']",
        SIGN_OUT: "//a[contains(@href, 'signoff')]",

        CATEGORY_CATS: "//a[contains(@href, 'categoryId=CATS')]",
        PRODUCT: "//a[contains(@href, 'productId=FL-DLH-02')]",
        ITEM: "//a[contains(@href, 'itemId=EST-17')]",

        ADD_TO_CART: "//a[contains(@href, 'addItemToCart')]",
        CHECKOUT: "//a[contains(@href, 'newOrderForm')]",
        CONTINUE: "//input[@name='newOrder']",
        CONFIRM_ORDER: "//a[contains(@href, 'confirmed=true')]"
    };

    //================================ HELPERS ================================ 
    async function measureStep(stepName, action, waitFor){
        context.log.info(`${stepName}`);
        await commands.measure.start(stepName);
        await action();
        if (waitFor) {
            await commands.wait.byXpath(waitFor);
        }
        await commands.measure.stop();
    }

    //================================ FLOW ================================ 

    await measureStep(
        'open welcome page',
        () => commands.navigate(CONFIG.BASE_URL),
        SELECTORS.ENTER_STORE
    );

    await measureStep(
        'click on Enter the Store',
        () => commands.click.byXpath(SELECTORS.ENTER_STORE),
        SELECTORS.SIGN_IN
    );

    await measureStep(
        'click on sign in',
        () => commands.click.byXpath(SELECTORS.SIGN_IN),
        SELECTORS.LOGIN_BUTTON
    );

    await measureStep(
        'sign in',
        async () => {
            // await commands.click.byXpath(SELECTORS.SIGN_IN);
            await commands.wait.byXpath(SELECTORS.USERNAME);
            await commands.addText.byXpath(CONFIG.USERNAME, SELECTORS.USERNAME);
            // await commands.addText.byXpath(SELECTORS.PASSWORD, CONFIG.PASSWORD);
            await commands.click.byXpath(SELECTORS.LOGIN_BUTTON);
        },
        SELECTORS.SIGN_OUT
    );

    await measureStep(
        'select cat category',
        () => commands.click.byXpath(SELECTORS.CATEGORY_CATS),
        SELECTORS.PRODUCT
    );

    await measureStep(
        'select persian product',
        () => commands.click.byXpath(SELECTORS.PRODUCT),
        SELECTORS.ITEM
    );

    await measureStep(
        'select adult male persian item',
        () => commands.click.byXpath(SELECTORS.ITEM),
        SELECTORS.ADD_TO_CART
    );

    await measureStep(
        'add to cart',
        () => commands.click.byXpath(SELECTORS.ADD_TO_CART),
        SELECTORS.CHECKOUT
    );

    await measureStep(
        'proceed to checkout',
        () => commands.click.byXpath(SELECTORS.CHECKOUT),
        SELECTORS.CONTINUE
    );

    await measureStep(
        'enter details and click on continue',
        () => commands.click.byXpath(SELECTORS.CONTINUE),
        SELECTORS.CONFIRM_ORDER
    );

    await measureStep(
        'click on confirm',
        () => commands.click.byXpath(SELECTORS.CONFIRM_ORDER),
        SELECTORS.SIGN_OUT
    );

    await measureStep(
        'click on sign out',
        () => commands.click.byXpath(SELECTORS.SIGN_OUT),
        SELECTORS.SIGN_IN
    );
}