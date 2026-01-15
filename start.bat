@echo off
echo ===============================================
echo   Index 101 Clone - Quick Start
echo ===============================================
echo.

cd /d "f:\fiver\project 1\p2-new\shopify-clone"

echo Checking if dependencies are installed...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo.
echo ===============================================
echo   Starting Development Server
echo ===============================================
echo.
echo Visit: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev

pause
