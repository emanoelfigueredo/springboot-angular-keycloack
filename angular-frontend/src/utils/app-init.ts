import { KeycloakService } from "keycloak-angular";
import { enviroments } from "src/environments/environments";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  console.log("init")
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: enviroments.keycloak.issuer,
            realm: enviroments.keycloak.realm,
            clientId: enviroments.keycloak.clientId
          },
          loadUserProfileAtStartUp: true,
          initOptions: {
            onLoad: 'check-sso',
            checkLoginIframe: true
          },
          bearerExcludedUrls: ['/assets']
        });
        resolve(resolve)
      } catch(erro) {
        reject(erro);
      }
    });
  };
}
