const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    cookieKey: 'agmeeting',
    jwtSecret: process.env.JWT_SECRET || 'e982109a315f8b4fd144f29e4f14446d962517a5bc509afc5ccabd63bd32368c4e630ae444b00b206cf3fb6161d155c174eadf58e545be014696c08fd3cae32c',
    REFRESH_TOKEN_SECERET: '4c7f98ccdf40d6d57eb35950c514a2b423c04929417ce12ffed016a3db40b4c969f3f7565efb340d92fd7b64b81c6cad77562eff52e8235bf0244499452f123d',
    stripe_connect_test_client_id: 'pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx',
    stripe_test_secret_key: 'sk_test_51IFiczICzvX2SDBYLSyfOLkUSPe8NXibMfkmW3tPa5Xtc9XVk2InfFwVtWyFOTH8Q4eAgiLXUugOkGFgRXKJvwYh00IUNOBKYF',
    stripe_test_api_key: 'pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx'
}

export default config
