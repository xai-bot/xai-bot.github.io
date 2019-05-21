
export default {
    app: {
        gateway: "https://titanic-explainer.gateway.dialogflow.cloud.ushakov.co", // <- enter your gateway URL here, the function is just a helper function for my cloud integration. You don't normally need it
        muted: false, // <- mute microphone at start
        start_suggestions: ["Get Started"], // <- array of suggestions, displayed at the start screen
        fallback_lang: 'en' // <- fallback language code, if history mode or network is unavailable
    },
    i18n: {
        en: {
            welcomeTitle: "Welcome to",
            muteTitle: "Mute Toggle",
            inputTitle: "Type your message",
            sendTitle: "Send",
            microphoneTitle: "Voice Input"
        },
        ru: {
            welcomeTitle: "Добро пожаловать в",
            muteTitle: "Режим звука",
            inputTitle: "Введите ваше сообщение",
            sendTitle: "Отправить",
            microphoneTitle: "Голосовой ввод"
        },
        de: {
            welcomeTitle: "Wilkommen bei",
            muteTitle: "Stumm Modus",
            inputTitle: "Schreiben Sie ihre Nachricht",
            sendTitle: "Senden",
            microphoneTitle: "Spracheingabe"
        },
        fr: {
            welcomeTitle: "Bienvenue à",
            muteTitle: "Sound Mode",
            inputTitle: "Entrez votre message",
            sendTitle: "Envoyer",
            microphoneTitle: "Entrée vocale"
        }
    }
}
