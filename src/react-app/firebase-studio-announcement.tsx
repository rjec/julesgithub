import React from 'react';

const FirebaseStudioAnnouncement: React.FC = () => {
  return (
    <div className="blog-post">
      <h1>What's new?</h1>
      <p>
        While the name has changed, the core features you love remain the same. You can still expect:
      </p>
      <ul>
        <li>A cloud-based development environment accessible from any device.</li>
        <li>AI coding assistance using Gemini models.</li>
        <li>The ability to import existing repos and customize your workspace.</li>
        <li>Support for popular frameworks and languages, including (but not limited to!) Go, Java, .NET, Python, Android, Flutter, and web (React, Angular, Vue.js, and more).</li>
        <li>Built-in support for emulation, testing, and debugging.</li>
        <li>Real-time collaboration features.</li>
      </ul>
      <p>
        In addition to the rebranding, we're also introducing some exciting new features and improvements:
      </p>

      <h2>What does this mean for existing Project IDX users?</h2>
      <p>
        If you're an existing Project IDX user, you don't need to do anything. Your existing projects and data will be automatically migrated to Firebase Studio. You can continue to access your projects at <a href="https://studio.firebase.google.com/">https://studio.firebase.google.com/</a>.
      </p>

      <h2>What if I encounter issues during the migration?</h2>
      <p>
        We've worked hard to make the transition smooth. However, if you encounter any problems, don't hesitate to reach out to the <a href="/support/troubleshooter/studio">Firebase Support team</a> or ask a question in the <a href="https://community.firebasestudio.dev/">discussion forum</a>.
      </p>

      <h2>Get started with Firebase Studio</h2>
      <p>Ready to experience Firebase Studio? Here's how to get started:</p>
      <ol>
        <li>Open <a href="https://studio.firebase.google.com/">Firebase Studio</a>.</li>
        <li>Sign in with your Google Account.</li>
        <li>Start building!</li>
      </ol>
    </div>
  );
};

export default FirebaseStudioAnnouncement;
