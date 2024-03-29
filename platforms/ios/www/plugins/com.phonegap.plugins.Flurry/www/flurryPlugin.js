cordova.define("com.phonegap.plugins.Flurry.FlurryPlugin", function(require, exports, module) { // Flurry Phonegap Plugin by JFP 12/2012

(function(window) {
  var cordova = window.cordova || window.Cordova || window.PhoneGap;


  // helper function to prevent Objective C bleed over into javascript
  function bool2ObjC(value) {
    
    if(value === true) {
      return 'YES';
    } else if(value === false) {
      return 'NO'
    }

    return value.toUpperCase();
  }


  function Flurry() {};

  // These functions must be called before you start the Flurry session

  Flurry.prototype.setAppVersion = function(version,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'setAppVersion', [version]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setShowErrorInLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setShowErrorInLogEnabled', [bool2ObjC(enableValue)]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setEventLoggingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setEventLoggingEnabled', [bool2ObjC(enableValue)]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setDebugLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setDebugLogEnabled', [bool2ObjC(enableValue)]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setSecureTransportEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setSecureTransportEnabled', [bool2ObjC(enableValue)]);
  };

  // seconds must be an integer
  Flurry.prototype.setSessionContinueSeconds = function(seconds, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setSessionContinueSeconds', [seconds]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setCrashReportingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setCrashReportingEnabled', [bool2ObjC(enableValue)]);
  };

  // End of functions that must be called before Flurry session starts

  // key is a string
  Flurry.prototype.startSession = function(key,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'startSession', [key]);
  };

  Flurry.prototype.endSession = function(successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'endSession', []);
  };

  // event must be a string
  Flurry.prototype.logEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  Flurry.prototype.logEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logEventWithParameters', [event, parameters]);
  };

  Flurry.prototype.logPageView = function(successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logPageView', []);
  };

  // timed must be Yes or No, because it's objective C
  Flurry.prototype.logTimedEvent = function(event, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logTimedEvent', [event, bool2ObjC(timed)]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // timed must be Yes or No, because it's objective C
  Flurry.prototype.logTimedEventWithParameters = function(event, parameters, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logTimedEventWithParameters', [event, parameters, bool2ObjC(timed)]);
  };

  Flurry.prototype.endTimedEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'endTimedEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // only used if you want to override the original parameters
  Flurry.prototype.endTimedEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'endTimedEventWithParameters', [event, parameters]);
  };

  // userID must be a string
  Flurry.prototype.setUserID = function(userID, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setUserID', [userID]);
  };

  // gender must be a string. male and female are acceptable values
  Flurry.prototype.setGender = function(gender, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setGender', [gender]);
  };

  // age must be an integer
  Flurry.prototype.setAge = function(age, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setAge', [age]);
  };

  // latitude and longitude must be doubles; horizontal and vertical accuracy must be float
  Flurry.prototype.setLatitude = function(latitude, longitude, horizontalAccuracy, verticalAccuracy, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'setLatitude', [latitude,longitude,horizontalAccuracy,verticalAccuracy]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setSessionReportsOnCloseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'setSessionReportsOnCloseEnabled', [bool2ObjC(enabled)]);
  };

  // argument must be Yes or No, because it's objective C
  Flurry.prototype.setSessionReportsOnPauseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'FlurryPlugin', 'setSessionReportsOnPauseEnabled', [bool2ObjC(enabled)]);
  };

  Flurry.prototype.logError = function(errorID, message, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'FlurryPlugin', 'logError', [errorID, message]);
  };

  Flurry.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins.flurry = new Flurry();
  };

  cordova.addConstructor(Flurry.install);



})(typeof global === "object" ? global : window);

});
