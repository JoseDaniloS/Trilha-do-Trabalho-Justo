import React, { useState, useEffect } from "react";
import {
  FaGlobe,
  FaHome,
  FaExclamationTriangle,
  FaArrowLeft,
  FaLink,
  FaBug,
  FaWifi,
  FaServer,
} from "react-icons/fa";

export default function NotFound() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setIsAnimated(true);
    setCurrentUrl(window.location.href);
  }, []);

  const handleGoBack = () => window.history.back();
  const handleGoHome = () => (window.location.href = "/");
  const handleReportIssue = () =>
    alert("Redirecionando para formulário de reporte de problema...");

  return (
    <div className="min-h-screen bg-neutral-bg flex items-center justify-center p-4 relative overflow-hidden text-text">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-dark/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Animated 404 Display */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isAnimated
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-10 opacity-0"
          }`}
        >
          <div className="relative mb-6">
            <div className="text-9xl font-black text-primary/20 mb-4 tracking-wider">
              404
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <FaGlobe
                  className="text-6xl text-primary animate-spin"
                  style={{ animationDuration: "8s" }}
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Error Card */}
        <div
          className={`bg-neutral-bg/10 backdrop-blur-lg rounded-3xl border border-neutral-bg/20 shadow-lg p-8 transition-all duration-1000 delay-300 ${
            isAnimated
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          {/* Error Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-error/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-error/30">
                <FaExclamationTriangle className="text-3xl text-error" />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">Página Não Encontrada</h1>
            <p className="text-text/70 text-lg leading-relaxed mb-6">
              A página que você está procurando não existe ou foi movida para
              outro local.
            </p>

            {/* Current URL Display */}
            <div className="bg-neutral-bg/30 rounded-xl p-4 border border-neutral-bg/50 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <FaLink className="text-text/50" />
                <span className="text-text/50 font-medium">
                  URL solicitada:
                </span>
              </div>
              <code className="text-primary text-sm break-all bg-neutral-bg/50 px-3 py-2 rounded-lg inline-block w-full">
                {currentUrl}
              </code>
            </div>
          </div>

          {/* Possible Causes */}
          <div className="bg-error/10 border border-error/30 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-error mb-4 flex items-center gap-3">
              <FaServer className="text-lg" />
              Possíveis causas:
            </h3>
            <ul className="text-error/70 space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">•</span>
                <span>URL digitada incorretamente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">•</span>
                <span>Link quebrado ou desatualizado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">•</span>
                <span>Página foi removida ou movida</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-error mt-1">•</span>
                <span>Problema temporário no servidor</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <button
              onClick={handleGoHome}
              className="bg-primary text-neutral-bg py-4 px-6 rounded-xl shadow-lg font-semibold flex items-center justify-center gap-3 hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              <FaHome />
              Página Inicial
            </button>

            <button
              onClick={handleGoBack}
              className="bg-neutral-bg/10 backdrop-blur-sm border border-black/10 shadow-lg text-text py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-neutral-bg/20 transition-all duration-300 transform hover:scale-105"
            >
              <FaArrowLeft />
              Voltar
            </button>

            <button
              onClick={handleReportIssue}
              className="bg-error/20 border border-error/30 text-error shadow-lg py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-error/30 transition-all duration-300 transform hover:scale-105"
            >
              <FaBug />
              Reportar Problema
            </button>
          </div>
        </div>

        {/* Help Section */}
        <div
          className={`mt-8 text-center transition-all duration-1000 delay-500 ${
            isAnimated
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-neutral-bg/5 backdrop-blur-sm rounded-lg border border-neutral-bg/10 p-6">
            <h3 className="font-semibold mb-2">Ainda precisa de ajuda?</h3>
            <p className="text-text/50 mb-4 text-sm">
              Entre em contato conosco se o problema persistir
            </p>
            <button className="bg-primary text-neutral-bg px-8 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg">
              💬 Suporte Online
            </button>
          </div>
        </div>

        {/* Floating Network Icons */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <FaGlobe className="absolute top-20 left-10 text-lg text-primary/20 animate-pulse" />
          <FaLink className="absolute top-40 right-20 text-xl text-secondary/20 animate-pulse delay-1000" />
          <FaServer className="absolute bottom-32 left-20 text-error/20 animate-pulse delay-500" />
          <FaWifi className="absolute bottom-20 right-10 text-primary-dark/20 animate-pulse delay-1500" />
        </div>
      </div>
    </div>
  );
}
