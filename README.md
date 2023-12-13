# React

- TypeScript, tanstack/react-query, react-router-dom (type module), styled-components (type module)

## 구현 내용

### 1. 동적 라우팅 설정

- 원 페이지 형식의 셀렉트 밸류에 따라 동적 라우팅을 설정.

### 2. 탠스택 쿼리/리액트 쿼리-데브툴스 설정

- 데이터 패칭 및 상태 관리를 위해 tanstack/react-query 라이브러리를 사용하였고, 디버깅을 위해 react-query-devtools를 설정

## 날씨 관련 데이터 처리

### 3. 날씨 데이터 패칭 함수 정의

- OpenWeatherMap API를 사용하여 날씨 데이터를 패칭하는 함수를 정의. params로 아이디를 추출하여 API에 매개변수로 전달

### 4. 현재 시간 포맷팅

- 현재 시간을 포맷팅하는 함수를 정의. Intl.DateTimeFormat을 사용하여 시간을 '시:분' 형식으로 출력

```typescript
const options: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
};
const time = new Intl.DateTimeFormat('ko-KR', options).format(currentTime);
```

### 5. 주간 날씨 데이터 패칭 함수 정의

- 주간 날씨 데이터를 패칭하는 함수를 정의

### 6. useMemo를 이용한 최적화

- forEach문을 사용하여 연산을 수행하는 부분에 useMemo를 적용하여 최적화. 데이터에 변화가 없을 때는 메모이제이션 된 값을 사용하여 성능을 향상
