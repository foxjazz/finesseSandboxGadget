server name: uccx_001_app_prod_uccx
#UCCX  Host Name: UCCX-001-APP-PROD.statebridgecompany.com
       Service: 1504
       Database Name: db_cra
       UID: uccxhruser
       Pswd: UCCXr3p0rts123!


my agent extension 4001004098

<script src="https://gist.github.com/andyferra/2554919.js"></script>

# ServiceUI

### Project to test the finesse eco system with an embedded gadget.



##finesse shortcuts:
https://uccx-001-app-prod.statebridgecompany.com/appadmin/main



ssh administrator@10.0.0.24  edc456TFC^&*
4001004098

OLD  OLD  ssh administrator@10.10.20.10 (pw is ciscopsdt) OLD  
utils reset_3rdpartygadget_password   (this needs to be run to enable the third party gadget echosystem)  
utils service restart Cisco Finesse Tomcat   (this is run after every change to the gadget xml on the back copied to the back end).    

in order to reboot dns server, rdp to 10.10.20.100 with abc.inc/Administartor as the username ciscopsdt as pw.


To test for functions, postman can be used to set ready and not ready state for the finesse desktop.  


##setting up with nginx  
    download and use the config file in the nginx folder. This is used both for the gadget client and 
    the web-service api.  Because the gadget only responds to ssl commands, nginx creates a valid reverse proxy.
    to start: nginx -s signal


## LINKS   
### <styl> color: red; </style> Useful finesse links
   <a href="https://developer.cisco.com/media/finesseDevGuide4.1/">Finesse developer guid</a> ***
   <a href="https://developer.cisco.com/media/finesseDevGuide4.1/CFIN_RF_D91DEB3D_00_dialog-update-call-variable-data.html">Finesse dev guide sheet</a>
  
# Useful Angular Links

https://developer.cisco.com/media/finesseDevGuide4.1/CFIN_RF_U1D810BD_00_upload-third-party-gadgets.html


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Is there an easy way to get a refresh to fire on the finesse desktop to re-read a gadget?


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
