import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://localhost:5001',
            redirectUrl: window.location.origin + '/Home',
            postLogoutRedirectUri: environment.appUrl,
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
