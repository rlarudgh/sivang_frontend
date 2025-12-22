# 💰 Sivang Frontend - 자동 가계부 클라이언트

<div align="center">

![Sivang Main Page](https://github.com/kimkh05/sivang_frontend/assets/81161675/24a95b5b-b2ad-4f0d-80c5-34d151c45b8f)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://sivang-frontend.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**직관적이고 빠른 가계부 웹 애플리케이션**

</div>

---

## 📖 프로젝트 소개

> "수입과 지출을 쉽고 빠르게, 자동으로 관리하는 스마트 가계부"

**Sivang Frontend**는 대덕소프트웨어마이스터고등학교(Daedeok Software Meister HighSchool)의 '프로젝트 실무II' 수업에서 제작된 자동 가계부 애플리케이션의 프론트엔드입니다. 

가계부 작성은 재정 관리의 첫걸음이지만, 많은 사람들이 귀찮고 복잡하다는 이유로 중도에 포기합니다. Sivang은 이러한 문제를 해결하고자 직관적인 UI/UX와 자동화 기능을 통해 누구나 쉽게 사용할 수 있는 가계부 서비스를 제공합니다.

### ✨ 주요 기능

- 📊 **실시간 대시보드**: 한눈에 보이는 수입/지출 현황
- 💸 **거래 내역 관리**: 쉽고 빠른 수입/지출 입력 및 수정
- 📈 **통계 시각화**: Chart.js를 활용한 직관적인 지출 분석
- 🏷️ **카테고리 관리**: 커스텀 카테고리 생성 및 색상 설정
- 💳 **다중 계좌 지원**: 여러 은행 계좌를 한 곳에서 관리
- 🔐 **안전한 인증**: JWT 기반의 보안 로그인 시스템
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- ⚡ **빠른 성능**: Vite를 사용한 초고속 빌드 및 HMR

---

## 🛠 기술 스택

### Core Technologies
- **Build Tool**: Vite
- **Framework**: React 18
- **Language**: TypeScript
- **Package Manager**: Yarn Berry

### State Management & Data Fetching
- **State Management**: Recoil
- **Data Fetching**: React Query (TanStack Query)
- **HTTP Client**: Axios

### Styling
- **CSS-in-JS**: Styled-Components
- **Design System**: 커스텀 테마 시스템

### Code Quality
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Git Hooks**: Husky
- **Pre-commit**: lint-staged

### Deployment
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions (추정)

---

## 🚀 시작하기

### 사전 요구사항

시작하기 전에 다음 프로그램들이 설치되어 있어야 합니다:

- Node.js 16.x 이상
- Yarn 또는 npm

### 설치 방법

#### 1. 저장소 클론

```bash
# 프론트엔드 저장소 클론
git clone https://github.com/rlarudgh/sivang_frontend.git [dir]
cd sivang_frontend
```

#### 2. 의존성 설치

```bash
# Yarn 사용 (권장)
yarn

# 또는 npm 사용
npm install
```

#### 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 백엔드 API 주소를 설정하세요:

```env
# 백엔드 API URL
VITE_API_URL=http://localhost:3000/api

# 또는 프로덕션 API
# VITE_API_URL=https://your-backend-api.com/api
```

> **📝 참고**: Vite는 환경 변수에 `VITE_` 접두사를 사용합니다. 이 접두사가 있는 변수만 클라이언트 코드에서 접근 가능합니다.

#### 4. 개발 서버 실행

```bash
# 개발 모드로 실행
yarn dev

# 또는
npm run dev
```

브라우저에서 `http://localhost:5173`을 열면 애플리케이션을 확인할 수 있습니다.

#### 5. 프로덕션 빌드

```bash
# 프로덕션 빌드
yarn build

# 빌드 결과 미리보기
yarn preview
```

---

## 📂 프로젝트 구조

```
sivang_frontend/
├── .github/              # GitHub Actions 워크플로우
├── .husky/               # Git hooks 설정
├── public/               # 정적 파일 (favicon, 이미지 등)
├── src/                  # 소스 코드
│   ├── assets/          # 이미지, 폰트 등의 리소스
│   ├── components/      # 재사용 가능한 React 컴포넌트
│   │   ├── common/     # 공통 컴포넌트 (버튼, 입력 필드 등)
│   │   ├── layout/     # 레이아웃 컴포넌트 (헤더, 사이드바 등)
│   │   └── domain/     # 도메인별 컴포넌트
│   ├── pages/           # 페이지 컴포넌트
│   │   ├── Auth/       # 로그인, 회원가입
│   │   ├── Dashboard/  # 대시보드
│   │   ├── Transaction/# 거래 내역
│   │   └── Statistics/ # 통계 및 분석
│   ├── hooks/           # Custom React Hooks
│   ├── api/             # API 통신 로직
│   ├── store/           # Recoil 상태 관리
│   │   ├── atoms/      # Recoil atoms
│   │   └── selectors/  # Recoil selectors
│   ├── styles/          # 전역 스타일 및 테마
│   │   ├── theme.ts    # 테마 설정
│   │   └── GlobalStyle.ts # 전역 스타일
│   ├── types/           # TypeScript 타입 정의
│   ├── utils/           # 유틸리티 함수
│   ├── routes/          # 라우팅 설정
│   ├── App.tsx          # 메인 App 컴포넌트
│   └── main.tsx         # 애플리케이션 엔트리 포인트
├── .eslintrc.js         # ESLint 설정
├── .prettierrc          # Prettier 설정
├── .lintstagedrc        # lint-staged 설정
├── index.html           # HTML 엔트리 포인트
├── vite.config.ts       # Vite 설정
├── tsconfig.json        # TypeScript 설정
├── vercel.json          # Vercel 배포 설정
└── package.json         # 프로젝트 의존성
```

---

## 🎨 주요 기능 상세

### 1. 대시보드
- **월별 수입/지출 요약**: 현재 월의 전체 수입과 지출을 카드 형태로 표시
- **최근 거래 내역**: 최신 거래 5-10개를 빠르게 확인
- **지출 카테고리 차트**: 파이 차트로 지출 분포 시각화
- **월별 추이 그래프**: 라인 차트로 수입/지출 추세 분석

### 2. 거래 내역 관리
- **빠른 입력**: 금액, 카테고리, 날짜를 간단하게 입력
- **실시간 업데이트**: React Query를 통한 즉각적인 UI 업데이트
- **필터링**: 날짜, 카테고리, 거래 유형별 필터
- **검색**: 거래 설명으로 검색
- **수정/삭제**: 간편한 거래 내역 관리

### 3. 통계 및 분석
- **기간별 분석**: 주간, 월간, 연간 통계
- **카테고리별 지출**: 어디에 가장 많이 지출했는지 한눈에 파악
- **예산 대비 실제 지출**: 목표 대비 현재 지출 비교
- **지출 트렌드**: 시간에 따른 지출 패턴 분석

### 4. 계좌 관리
- **다중 계좌 등록**: 여러 은행 계좌 추가 및 관리
- **계좌별 잔액 확인**: 각 계좌의 현재 잔액 표시
- **계좌별 거래 내역**: 계좌별로 분류된 거래 내역

---

## 🧩 핵심 기술 설명

### Vite - 초고속 빌드 도구

Vite는 차세대 프론트엔드 빌드 도구로, 기존의 Webpack이나 Create React App보다 훨씬 빠른 개발 경험을 제공합니다.

#### Vite의 장점:
```
전통적인 번들러 (Webpack):
개발 서버 시작: 30-60초 ⏱️
HMR (Hot Module Replacement): 1-3초 🔄

Vite:
개발 서버 시작: 1-2초 ⚡
HMR: 0.1초 미만 🚀
```

**왜 이렇게 빠를까?**
- **ESM 활용**: 브라우저의 네이티브 ES 모듈을 사용하여 번들링 없이 개발
- **필요할 때만 변환**: 실제로 사용되는 파일만 변환
- **효율적인 캐싱**: 변경되지 않은 파일은 다시 처리하지 않음

### Recoil - 상태 관리

Recoil은 React를 위한 상태 관리 라이브러리로, Redux보다 간단하면서도 강력합니다.

#### 기본 개념:

**Atom (상태의 단위)**
```typescript
// 사용자 정보를 저장하는 atom
const userState = atom({
  key: 'userState',
  default: null
});
```

**Selector (파생된 상태)**
```typescript
// 사용자의 거래 내역에서 총 지출을 계산
const totalExpenseSelector = selector({
  key: 'totalExpense',
  get: ({ get }) => {
    const transactions = get(transactionsState);
    return transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }
});
```

**컴포넌트에서 사용**
```typescript
function Dashboard() {
  const user = useRecoilValue(userState);
  const totalExpense = useRecoilValue(totalExpenseSelector);
  
  return (
    <div>
      <h1>{user?.name}님의 총 지출</h1>
      <p>{totalExpense.toLocaleString()}원</p>
    </div>
  );
}
```

### React Query - 서버 상태 관리

React Query는 서버에서 데이터를 가져오고 캐싱하는 작업을 단순화합니다.

#### 기존 방식 vs React Query:

**기존 방식 (복잡함):**
```typescript
function Transactions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
  
  // 로딩, 에러, 성공 상태 처리...
}
```

**React Query 사용 (간단함):**
```typescript
function Transactions() {
  const { data, isLoading, error } = useQuery(
    'transactions',
    () => fetch('/api/transactions').then(res => res.json())
  );
  
  // 자동으로 로딩, 에러, 캐싱, 재요청 처리!
}
```

#### React Query의 강력한 기능:
- **자동 캐싱**: 같은 데이터를 다시 요청하지 않음
- **백그라운드 업데이트**: 화면을 보지 않을 때도 데이터를 최신 상태로 유지
- **Optimistic Updates**: 서버 응답을 기다리지 않고 UI를 먼저 업데이트
- **Infinite Scroll**: 무한 스크롤 구현이 간단함

### Styled-Components - CSS-in-JS

Styled-Components를 사용하면 JavaScript 안에서 CSS를 작성할 수 있습니다.

#### 왜 CSS-in-JS를 사용할까?

**전통적인 CSS의 문제점:**
```css
/* global.css - 전역 스타일이라 충돌 위험 */
.button {
  background: blue;
}

/* 다른 파일에서도 .button을 사용하면 충돌! */
.button {
  background: red; /* 어느 스타일이 적용될까? */
}
```

**Styled-Components의 해결책:**
```typescript
// Button.tsx - 자동으로 고유한 클래스명 생성
const Button = styled.button`
  background: blue;
  padding: 10px 20px;
  border-radius: 8px;
  
  &:hover {
    background: darkblue;
  }
`;

// 테마 적용도 간단!
const ThemedButton = styled(Button)`
  background: ${props => props.theme.primary};
`;
```

#### 장점:
- **스코프 격리**: 각 컴포넌트의 스타일이 독립적
- **동적 스타일링**: Props에 따라 스타일을 쉽게 변경
- **타입 안정성**: TypeScript와 완벽한 통합
- **자동 벤더 프리픽스**: 브라우저 호환성 자동 처리

---

## 🔐 인증 시스템 이해하기

### 프론트엔드에서의 JWT 인증

백엔드에서 생성된 JWT 토큰을 프론트엔드에서 어떻게 관리하고 사용하는지 설명합니다.

#### 1️⃣ 로그인 프로세스

```typescript
// 1. 사용자가 로그인 버튼 클릭
const handleLogin = async (email: string, password: string) => {
  try {
    // 2. 백엔드에 로그인 요청
    const response = await axios.post('/api/auth/login', {
      email,
      password
    });
    
    // 3. 토큰 받기
    const { token, refreshToken } = response.data;
    
    // 4. 로컬 스토리지에 저장
    localStorage.setItem('accessToken', token);
    localStorage.setItem('refreshToken', refreshToken);
    
    // 5. Recoil에 사용자 정보 저장
    setUser(response.data.user);
    
    // 6. 대시보드로 리다이렉트
    navigate('/dashboard');
  } catch (error) {
    // 에러 처리
    console.error('로그인 실패:', error);
  }
};
```

#### 2️⃣ 인증이 필요한 API 요청

```typescript
// Axios 인터셉터로 모든 요청에 토큰 자동 추가
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    
    if (token) {
      // Authorization 헤더에 토큰 추가
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);
```

#### 3️⃣ 토큰 만료 처리

```typescript
// 응답 인터셉터로 401 에러 처리
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // 토큰 만료 (401 에러)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        // Refresh Token으로 새 Access Token 받기
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/api/auth/refresh', {
          refreshToken
        });
        
        const { token } = response.data;
        localStorage.setItem('accessToken', token);
        
        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (refreshError) {
        // Refresh Token도 만료됨 - 로그아웃
        localStorage.clear();
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);
```

### 보안 고려사항

#### ❌ 하지 말아야 할 것:
- **토큰을 URL 파라미터로 전송**: URL은 브라우저 히스토리에 남아 보안에 취약
- **console.log로 토큰 출력**: 개발 중에도 토큰을 콘솔에 출력하지 않기

#### ✅ 해야 할 것:
- **HTTPS 사용**: 프로덕션에서는 반드시 HTTPS로 통신
- **XSS 방지**: 사용자 입력을 항상 검증하고 이스케이프 처리
- **토큰 만료 처리**: Refresh Token을 활용한 자동 갱신
- **로그아웃 시 토큰 삭제**: 로그아웃하면 로컬 스토리지를 완전히 비우기

---

## 📱 반응형 디자인

Sivang은 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 경험을 제공합니다.

### 브레이크포인트

```typescript
// theme.ts
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px'
};
```

### 반응형 컴포넌트 예시

```typescript
const Container = styled.div`
  padding: 16px;
  
  /* 태블릿 이상 */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* 데스크톱 이상 */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 32px;
  }
`;
```
--- 

## 🔧 트러블슈팅

### 자주 발생하는 문제들

#### 1. CORS 에러

```
Access to XMLHttpRequest at 'http://localhost:3000/api' from origin 
'http://localhost:5173' has been blocked by CORS policy
```

**해결 방법**:
백엔드 서버에서 CORS를 허용해야 합니다. Express의 경우:

```javascript
// backend server.js
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

#### 2. 환경 변수가 undefined

```typescript
console.log(import.meta.env.VITE_API_URL); // undefined
```

**해결 방법**:
- 환경 변수 이름이 `VITE_` 로 시작하는지 확인
- `.env` 파일이 프로젝트 루트에 있는지 확인
- 서버를 재시작 (환경 변수 변경 시 필수)

#### 3. Styled-Components 타입 에러

```
Property 'theme' does not exist on type 'DefaultTheme'
```

**해결 방법**:
`styled.d.ts` 파일 생성:

```typescript
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      // ...
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      // ...
    };
  }
}
```

---
