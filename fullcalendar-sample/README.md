## FullCalendar Sample with Typescript

- reference : https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/react-typescript/src

<br>

### plugins

- 전체 목록 : https://fullcalendar.io/docs/plugin-index
- **`dayGridPlugin`** : 월별, 일별 달력 보여주는 plugin
- **`timeGridPlugin`** : 시간별 달력 보여주는 plugin
- **`interactionPlugin`** : 날짜 클릭, 여러 날짜를 클릭하거나 드래그했을 때 하이라이트, 날짜를 드래그 앤 드롭, 기간 설정 resizing 할 수 있는 plugin

<br>

### headerToolbar

- 달력 상단의 버튼과 제목을 정의
- `false` 값을 주면 표시되지 않음
- `start/center/end` 와 `left/center/right`를 프로퍼티로 가지는 객체를 줄 수 있음

  - 콤마와 공백을 기준으로 하는 문자열로 표현
  - `ex) left: 'prev,next today'`
  - 콤마로 나뉘는 값은 화면상으로 나란히 보여짐
  - 공백으로 나뉘는 값은 사이에 공백을 두고 보여짐

  <br>

- 사용할 수 있는 문자열 값
  - `title` : 문자열. 현재 month/week/day
  - `prev` : 버튼. 이전 month/week/day로 이동
  - `next` : 버튼. 다음 month/week/day로 이동
  - `prevYear` : 버튼. 이전 년도로 이동
  - `nextYear` : 버튼. 다음 년도로 이동
  - `today` : 버튼. 현재 month/week/day로 이동
  - view name : 버튼. 해당 뷰로 바꿔줌
    - ex ) `dayGridMonth`, `timeGridWeek`, `timeGridDay`

<br>

### initialView

- 초기 캘린더 종류
- 문자열. 기본 값은 'dayGridMonth'

### editable

- 일정을 드래그 가능하게 하고 기간 설정을 resizing 할 수 있는지
- boolean. 기본 값은 false
- `true` : 일정 드래그 true, 기간 설정 resizing true
- `false` : 일정 드래그 false, 기간 설정 resizing false
- 따로 설정하고 싶다면 `eventStartEditable`와 `eventDurationEditable`을 사용

<br>

### selectable

- 여러 날짜 또는 여러 시간을 클릭 또는 드래그하여 하이라이트
- boolean. 기본 값은 false
- `interactionPlugin`이 반드시 필요하고 `true`로 변경해주어야 한다.

<br>

### selectMirror

- **TimeGrid**에서 드래그할 때 미리 보기를 그려줄지
- boolean. 기본 값은 false

<br>

### dayMaxEvents

- 날짜 칸에 들어갈 수 있는 일정 수의 최대를 정할지 말지
- boolean. 기본 값은 false
- `false` : 날짜 칸에 최대 일정 수가 정해지지 않아 추가할수록 날짜 칸의 높이가 증가
- `true` : 날짜 칸에 최대 일정 수를 정해서 날짜 칸의 크기에 변화가 없고, 최대치를 초과하면 `+more` 링크가 나타나서 팝업 형태로 모든 일정을 보여줌

<br>

### weekends

- 달력에서 토요일, 일요일 colum을 보여줄지 말지
- boolean. 기본 값은 true

<br>

### initialEvents

- EventInput 타입의 객체를 가진 초기 일정(이벤트) 배열

<br>

### select

- 날짜/시간이 선택되면 실행
- 인자로 받는 `selectInfo` 객체는 아래와 같은 프로퍼티들을 갖는다
  - `start` : Date 객체. 날짜 선택의 시작 날짜
  - `end` : Date 객체. 날짜 선택의 마지막 날짜.
    - ex) 만약 'all-day'를 선택하고 마지막 날이 목요일이라면 `end`는 금요일
  - `startStr` : 문자열. 시작 날짜의 ISO 문자열. 달력의 타임존과 유사한 타임존 오프셋을 가짐. 만약 'all-day'를 선택했다면 시간이나 타임존을 가지지 않는다.
  - `endStr` : 문자열. 마지막 날짜의 ISO 문자열.
  - `allDay` : Boolean.
  - `jsEvent` : 자바스크립트 내장 이벤트
  - `view` : View object(https://fullcalendar.io/docs/view-object).현재 달력 화면 종류
  - `resource` : Resource object (https://fullcalendar.io/docs/resource-object). resource plugin을 쓸때만 가능.

<br>

### eventContent

- 생성된 콘텐츠는 이벤트 요소의 가장 안쪽에있는 래퍼 안에 삽입. 콜백 함수로 제공되는 경우 연결된 이벤트 데이터가 변경 될 때마다 호출.

<br>

### eventClick

- 일정(이벤트)를 클릭했을 때 실행
- 인자로 받는 `clickInfo` 객체는 아래와 같은 프로퍼티를 가짐
  - `event` : 연관된 일정(이벤트) 객체
  - `el`: 일정의 HTML 객체
  - `jsEvent`: javascirpt 내장 이벤트
  - `view`: View object(https://fullcalendar.io/docs/view-object).현재 달력 화면 종류

<br>

### eventsSet

- 일정 데이터(이벤트 데이터)가 초기화 되거나 변경이 생기고나서 호출됨
- 인자로 EventApi 타입의 일정(이벤트) 배열을 받음
