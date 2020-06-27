$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Next.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "User want to select product by brand and put in basket",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User go to Girls option and select age",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User search product with \"\u003cBrand\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should found all the required product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should select the required product",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": ";;",
  "rows": [
    {
      "cells": [
        "Brand"
      ],
      "line": 12,
      "id": ";;;1"
    },
    {
      "cells": [
        "Label Mix"
      ],
      "line": 13,
      "id": ";;;2"
    },
    {
      "cells": [
        "Loake"
      ],
      "line": 14,
      "id": ";;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9417159500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "",
  "description": "",
  "id": ";;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User go to Girls option and select age",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User search product with \"Label Mix\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should found all the required product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should select the required product",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 7396810000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_go_to_Girls_option_and_select_age()"
});
formatter.result({
  "duration": 321031500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Label Mix",
      "offset": 26
    }
  ],
  "location": "StepDef.user_search_product_with(String)"
});
formatter.result({
  "duration": 4032494400,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"Info\"\u003e...\u003c/div\u003e is not clickable at point (1112, 539). Other element would receive the click: \u003cdiv class\u003d\"FooterBG\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-98TS530D\u0027, ip: \u0027192.168.0.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\bhupe\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49864}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dd705446ae0000cada8d380b86fcb52c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.Next.co.uk.pagespackage.Resultpage.brand(Resultpage.java:33)\r\n\tat org.Next.co.uk.stepdefination.StepDef.user_search_product_with(StepDef.java:28)\r\n\tat ✽.And User search product with \"Label Mix\"(Next.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.user_should_found_all_the_required_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_should_select_the_required_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 9164449200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": ";;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User go to Girls option and select age",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User search product with \"Loake\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should found all the required product",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User should select the required product",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 6512656900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_go_to_Girls_option_and_select_age()"
});
formatter.result({
  "duration": 264671400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Loake",
      "offset": 26
    }
  ],
  "location": "StepDef.user_search_product_with(String)"
});
formatter.result({
  "duration": 3906191300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cdiv class\u003d\"Info\"\u003e...\u003c/div\u003e is not clickable at point (371, 539). Other element would receive the click: \u003cli class\u003d\"FooterSection\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-98TS530D\u0027, ip: \u0027192.168.0.29\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\bhupe\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49960}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5175213efc71db9347486e98d6a4b331\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.Next.co.uk.pagespackage.Resultpage.brand(Resultpage.java:33)\r\n\tat org.Next.co.uk.stepdefination.StepDef.user_search_product_with(StepDef.java:28)\r\n\tat ✽.And User search product with \"Loake\"(Next.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDef.user_should_found_all_the_required_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.user_should_select_the_required_product()"
});
formatter.result({
  "status": "skipped"
});
});