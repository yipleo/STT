import React from 'react';
import { Mic, Smartphone, Mail, Shield, Globe, Cpu, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header / Hero Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/icon.png" alt="Logo" className="w-10 h-10 rounded-lg shadow-sm" />
            <h1 className="text-xl font-bold text-gray-900">STT 实时翻译 - 技术支持</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">应用简介</a>
            <a href="#faq" className="text-gray-500 hover:text-blue-600 transition-colors">常见问题</a>
            <a href="#contact" className="text-gray-500 hover:text-blue-600 transition-colors">联系我们</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* App Info Section */}
        <section id="about" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img 
              src="/icon.png" 
              alt="STT App Icon" 
              className="flex-shrink-0 w-32 h-32 rounded-2xl shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">STT 实时翻译</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                STT 实时翻译是一款专为 iOS 用户设计的音视频转文字及翻译应用。
                利用离线语音识别技术，它能够准确快速地将系统内其他应用播放的音视频转换为文本，并支持多语言实时互译。
                带有录音记录，帮助用户管理和回溯内容。无论是看海外平台直播还是国际会议，STT 实时翻译都能为您提供流畅、低延迟的沟通体验。
                应用严格遵守隐私保护标准，默认在本地处理所有音频数据，让您的对话安全无忧。
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                  <Smartphone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">iOS 18.0+</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">多语言支持</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                  <Cpu className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">离线识别</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <div className="flex items-center space-x-2 mb-8">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">常见问题 (FAQ)</h2>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Q: 如何下载离线语言包？</h3>
              <div className="space-y-4">
                <ol className="list-decimal list-inside space-y-2 text-gray-700 font-medium">
                  <li>打开 iPhone "设置" -&gt; "通用" -&gt; "键盘"</li>
                  <li>进入"键盘"列表，添加目标语言的键盘（例如：日语 - 罗马字）</li>
                  <li>返回上一级，进入"听写语言"并勾选该语言</li>
                </ol>
                
                <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-600 border border-orange-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">💡</span>
                    <span className="font-bold text-gray-900">常见问题：</span>
                  </div>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>如果"听写语言"列表中没有您需要的语言，请先在"键盘"中添加对应语言的输入法。</li>
                    <li>勾选语言后，系统会自动在后台下载离线包（需连接 Wi-Fi）。</li>
                    <li>设置中没有单独的"下载"按钮，勾选即启用。</li>
                    <li>若设置页底部显示"听写会在 iPhone 上处理…"，即代表离线功能已就绪。</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Q: 支持哪些语言的翻译？</h3>
              <p className="text-gray-600">A: 目前应用支持中文、英文、日文、韩文、法文、德文、西班牙文等全球主流语言的实时互译。我们会持续更新模型以支持更多语种。</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Q: 我的对话数据安全吗？</h3>
              <p className="text-gray-600">A: 我们非常重视您的隐私。应用默认采用本地处理模式，所有的语音识别和文本转换都在您的设备上完成，不会上传至任何云端服务器。您可以完全放心地谈论敏感话题。</p>
            </div>


          </div>
        </section>

        {/* Developer & Contact Section */}
        <section id="contact" className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">开发者信息 & 联系方式</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">开发者</h3>
                <p className="text-lg font-medium text-gray-900">Zhipeng Ye</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">联系我们</h3>
                <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:729819206@qq.com" className="text-lg font-medium">729819206@qq.com</a>
                </div>
                <p className="text-sm text-gray-500 mt-2">工作日 24 小时内回复</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">隐私与条款</h3>
                <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  <Shield className="w-5 h-5" />
                  <span className="text-lg font-medium">隐私政策 (Privacy Policy)</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">点击查看我们如何保护您的数据</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Zhipeng Ye. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">STT 实时翻译 - 让沟通无国界</p>
        </div>
      </footer>
    </div>
  );
}
