import { combineLatest, fromEvent } from 'rxjs';

const temperatureInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const temparatureInputEvent$ = fromEvent(temperatureInput, 'input');
const conversionInputEvent$ = fromEvent(conversionDropdown, 'input');

combineLatest([temparatureInputEvent$, conversionInputEvent$]).subscribe(
  ([temparatureInputEvent, conversionInputEvent]) => {
    const temperature = Number(temparatureInputEvent.target['value']);
    const conversion = conversionInputEvent.target['value'];

    let result: number;
    if (conversion === 'f-to-c') {
      result = ((temperature - 32) * 5) / 9;
    } else if (conversion === 'c-to-f') {
      result = (temperature * 9) / 5 + 32;
    }

    resultText.innerHTML = String(result);

    // console.log(
    //   temparatureInputEvent.target['value'],
    //   conversionInputEvent.target['value']
    // );
  }
);
