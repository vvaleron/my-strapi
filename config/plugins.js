module.exports = (env) => ({
    "backup-restore": {
        postgres: {
            // Update with your path
            pathToPgDump: "/usr/local/opt/libpq/bin/pg_dump",
        },
    },
    email: {
        provider: 'nodemailer',
        providerOptions: {
            host: env('SMTP_HOST', 'smtp.example.com'),
            port: env('SMTP_PORT', 587),
            auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
            },
            // ... any custom nodemailer options
        },
        settings: {
            defaultFrom: 'hello@example.com',
            defaultReplyTo: 'hello@example.com',
        },
    }
});
