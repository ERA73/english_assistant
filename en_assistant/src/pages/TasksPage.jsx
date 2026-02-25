import { useState } from 'react';
import '../styles/tasks.css';

export function TasksPage() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [calendarLinks, setCalendarLinks] = useState(null);

    const formatDateTimeForGoogle = (date, time) => {
        const start = `${date.replace(/-/g, '')}T${time.replace(/:/g, '')}00`;
        const [year, month, day] = date.split('-');
        const [hours, minutes] = time.split(':');
        const endHours = String((parseInt(hours) + 1) % 24).padStart(2, '0');
        const end = `${year}${month}${day}T${endHours}${minutes}00`;
        return { start, end };
    };

    const generateICS = () => {
        const { start, end } = formatDateTimeForGoogle(date, time);
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            `SUMMARY:${title}`,
            `DTSTART:${start}`,
            `DTEND:${end}`,
            `DESCRIPTION:${description}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'task.ics';
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { start, end } = formatDateTimeForGoogle(date, time);
        const encodedTitle = encodeURIComponent(title);
        const encodedDescription = encodeURIComponent(description);

        const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${start}/${end}&details=${encodedDescription}`;
        const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodedTitle}&startdt=${date}T${time}:00&enddt=${date}T${String((parseInt(time.split(':')[0]) + 1) % 24).padStart(2, '0')}${time.split(':')[1]}:00&body=${encodedDescription}`;

        setCalendarLinks({ googleUrl, outlookUrl });
    };

    return (
        <div className='tasks-container'>
            <h2 className='tasks-title'>Create a Task in Your Calendar</h2>
            <p className='tasks-description'>
                Fill in the form below to create a task and add it to your phone&apos;s calendar.
            </p>
            <form className='tasks-form' onSubmit={handleSubmit}>
                <div className='tasks-form-group'>
                    <label className='tasks-label' htmlFor='task-title'>Task Title</label>
                    <input
                        id='task-title'
                        className='tasks-input'
                        type='text'
                        placeholder='e.g. Study Phrasal Verbs'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className='tasks-form-group'>
                    <label className='tasks-label' htmlFor='task-date'>Date</label>
                    <input
                        id='task-date'
                        className='tasks-input'
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className='tasks-form-group'>
                    <label className='tasks-label' htmlFor='task-time'>Time</label>
                    <input
                        id='task-time'
                        className='tasks-input'
                        type='time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div className='tasks-form-group'>
                    <label className='tasks-label' htmlFor='task-description'>Description (optional)</label>
                    <textarea
                        id='task-description'
                        className='tasks-textarea'
                        placeholder='e.g. Practice 10 phrasal verbs'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className='tasks-btn' type='submit'>Create Task</button>
            </form>

            {calendarLinks && (
                <div className='tasks-calendar-links'>
                    <h3>Add to your calendar:</h3>
                    <a
                        className='tasks-calendar-link'
                        href={calendarLinks.googleUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        📅 Google Calendar
                    </a>
                    <a
                        className='tasks-calendar-link'
                        href={calendarLinks.outlookUrl}
                        target='_blank'
                        rel='noreferrer'
                    >
                        📅 Outlook Calendar
                    </a>
                    <button className='tasks-calendar-link' onClick={generateICS} style={{cursor: 'pointer', border: 'none'}}>
                        📥 Download .ics file (iPhone / Android)
                    </button>
                </div>
            )}
        </div>
    );
}
