# Azure Function Servicebus Typescript
Azure Function과 Azure Service Bus Queue를 이용하여 Android 알림을 발송한다.
<br>
<br>
<br>
### Folder Structure
src/function/~  : 모든 함수와 트리거 및 바인딩의 기본 위치<br>
src/function/placeholders/*.json : service account 관련<br>
src/constants/~ : constants.ts, enums.ts 등..<br>
<br>
<br>
### Architecture
![제목 없는 다이어그램 drawio (3)](https://github.com/user-attachments/assets/efda6bd0-62de-4e53-bea1-68877e291ec2)
<br>
<br>
### 참고자료
https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-reference-node?tabs=javascript%2Cwindows%2Cazure-cli&pivots=nodejs-model-v4<br>
https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-bindings-service-bus-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv5&pivots=programming-language-typescript<br>
