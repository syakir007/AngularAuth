import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://localhost:5001',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: 'AngularClient',
            
            scope: 'openid profile verification api1', // 'openid profile ' + your scopes
            responseType: 'code',
            //silentRenew: true,
            //silentRenewUrl: window.location.origin + '/silent-renew.html',
            //renewTimeBeforeTokenExpiresInSeconds: 10,
            logLevel: LogLevel.Debug,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
