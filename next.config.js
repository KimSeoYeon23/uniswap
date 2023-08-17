// JSDoc 주석, TypeScript를 사용하는 경우 이 주석을 통해 nextConfig 객체의 타입을 NextConfig로 지정하고 있다.
/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    // React의 Strict Mode 설정
    // Strict Mode는 애플리케이션의 잠재적인 문제를 찾아내기 위해 React 컴포넌트를 더 엄격하게 검사하는 모드
    reactStrictMode: true,
  };

  return nextConfig;
};
