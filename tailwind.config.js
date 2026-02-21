tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: 'hsl(var(--card))',
          primary: 'hsl(var(--primary))',
          border: 'hsl(var(--border))',
        },
        boxShadow: {
          'rayo': '0 0 15px hsl(var(--primary) / 0.5)',
          'inner-glow': 'inset 0 0 20px hsl(var(--primary) / 0.1)',
        }
      }
    }
  };