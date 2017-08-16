# supreme-guacamole
Committee application application for Online online.

## Configuration

### Authorization configuration

To connect Supreme Guacamole to an authentication backend you might have to change some of the following environment variables.

| Key | Default value | Description |
|---  | :---:           |---          |
| `SG_AUTH_AUTHORITY` | `http://localhost:8000` | Authority server / OAuth provider |
| `SG_AUTH_CLIENT_ID` | | The client ID from OAuth |
| `SG_AUTH_RESPONSE_TYPE` | `token` | The response type. Should probably not be changed unless implementation of OAuth is changed. |
| `SG_AUTH_REDIRECT_URI` | `http://localhost:8080/auth` | The local SG endpoint to handle the login attempt. |
| `SG_AUTH_SCOPE` | See [scopes](https://github.com/dotkom/supreme-guacamole/tree/master/app/src/common/constants.js) | The scopes this application requires from the OAuth provider. |
| `SG_AUTH_ENDPOINT_AUTH` | `http://localhost:8000/sso/o/authorize/` | Where to send the authorization payload | 
| `SG_AUTH_ENDPOINT_USER` | `http://localhost:8000/sso/o/user/` | Where to retrieve user info |
| `SG_AUTH_ENDPOINT_REVOKE` | `http://localhost:8000/sso/o/revoke/` | Where to send the authorization revocation payload |
