// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth";
import { useCallback } from 'react';

const verses = [
  { text: "And we know that in all things God works for the good of those who love him...", ref: "Romans 8:28" },
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { text: "Be strong and courageous... for the Lord your God goes with you.", ref: "Deuteronomy 31:6" },
  { text: "Run in such a way as to get the prize.", ref: "1 Corinthians 9:24" }
];

export default function Dashboard() {
  const [progress, setProgress] = useState({});
  const [reflections, setReflections] = useState({});
  const [dailyVerse, setDailyVerse] = useState(null);
  const [username, setUsername] = useState('');
  const [editing, setEditing] = useState(false);
  const [inputUsername, setInputUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const readingPlan = [
    // Week 1
    [
      { day: "Day 1", reading: "Genesis 1–3", description: "Creation & the Fall" },
      { day: "Day 2", reading: "Genesis 6–9", description: "Noah's Ark & Covenant" },
      { day: "Day 3", reading: "Genesis 12, 15–17", description: "God's Promise to Abraham" },
      { day: "Day 4", reading: "Genesis 22", description: "Abraham & Isaac" },
      { day: "Day 5", reading: "Genesis 37, 39–45", description: "Joseph’s Story" },
      { day: "Day 6", reading: "Genesis 50", description: "Joseph’s Conclusion" },
      { day: "Day 7", reading: "Reflection & Catch-Up", description: "This Weeks's Thoughts" }
    ],
    // Week 2
    [
      { day: "Day 8", reading: "Exodus 1–4", description: "Moses' Calling" },
      { day: "Day 9", reading: "Exodus 7–12", description: "Plagues & the Passover" },
      { day: "Day 10", reading: "Exodus 14–15", description: "Red Sea Crossing" },
      { day: "Day 11", reading: "Exodus 19–20", description: "The Ten Commandments" },
      { day: "Day 12", reading: "Exodus 32–34", description: "The Golden Calf" },
      { day: "Day 13", reading: "Exodus 40", description: "God's Presence" },
      { day: "Day 14", reading: "Reflection & Catch-Up", description: "This Weeks's Thoughts" }
    ],
    // Week 3
    [
      { day: "Day 15", reading: "John 1–3", description: "Jesus' Identity & Nicodemus" },
      { day: "Day 16", reading: "John 6", description: "Feeding the 5,000 & Walking on Water" },
      { day: "Day 17", reading: "John 10–11", description: "Good Shepherd & Lazarus" },
      { day: "Day 18", reading: "John 13–15", description: "The Last Supper" },
      { day: "Day 19", reading: "John 18–19", description: "Jesus' Crucifixion" },
      { day: "Day 20", reading: "John 20–21", description: "Resurrection & Final Words" },
      { day: "Day 21", reading: "Reflection & Catch-Up", description: "This Weeks's Thoughts" }
    ],
    // Week 4
    [
      { day: "Day 22", reading: "Romans 1–3", description: "Sin & God's Righteousness" },
      { day: "Day 23", reading: "Romans 5–6", description: "Justification & New Life" },
      { day: "Day 24", reading: "Romans 8", description: "Life in the Spirit" },
      { day: "Day 25", reading: "Romans 12", description: "Living as a Christian" },
      { day: "Day 26", reading: "Revelation 1–3", description: "Messages to Churches" },
      { day: "Day 27", reading: "Revelation 19–22", description: "Jesus' Return & New Creation" },
      { day: "Day 28", reading: "Reflection & Final Thoughts", description: "This Weeks's Thoughts" }
    ]
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
  
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const data = docSnap.data();
          const loadedUsername = data.username;
  
          setProgress(data.progress || {});
          setReflections(data.reflections || {});
  
          if (loadedUsername) {
            setUsername(loadedUsername);
            setInputUsername(loadedUsername);
          } else {
            const defaultUsername = user.email ? user.email.split('@')[0] : "User";
            setUsername(defaultUsername);
            setInputUsername(defaultUsername);
  
            await setDoc(docRef, {
              username: defaultUsername,
              progress: {},
              reflections: {}
            }, { merge: true });
          }
        } else {
          // if document doesn't exist
          const defaultUsername = user.email ? user.email.split('@')[0] : "User";
          await setDoc(docRef, {
            username: defaultUsername,
            progress: {},
            reflections: {}
          });
          setUsername(defaultUsername);
          setInputUsername(defaultUsername);
        }
      }
    });
  
    const todayIndex = new Date().getDay() % verses.length;
    setDailyVerse(verses[todayIndex]);
  
    return () => unsubscribe();
  }, []);

  const saveData = useCallback(async (newProgress, newReflections, newUsername = username) => {
    const user = auth.currentUser;
    if (!user) return;
  
    await setDoc(doc(db, 'users', user.uid), {
      username: newUsername,
      progress: newProgress,
      reflections: newReflections
    }, { merge: true });
  }, [username]);

  const toggleCheckbox = (key) => {
    const updatedProgress = { ...progress, [key]: !progress[key] };
    setProgress(updatedProgress);
    
  };
  
  const updateReflection = (key, value) => {
    const updatedReflections = { ...reflections, [key]: value };
    setReflections(updatedReflections);
    
  };

  const handleUsernameSave = async () => {
    await saveData(progress, reflections, inputUsername);
    setUsername(inputUsername); 
    setEditing(false);
  };

  const completedDays = Object.values(progress).filter(Boolean).length;
  const totalDays = 28;

  useEffect(() => {
    if (currentUser) {
      const timeoutId = setTimeout(() => {
        saveData(progress, reflections, username);
      }, 1000); // 1 second delay
  
      return () => clearTimeout(timeoutId); // cancel previous timer if typing/checking continues
    }
  }, [progress, reflections, username, currentUser, saveData]);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #001C55, #003B7A)',
      color: '#EAF1F8',
      minHeight: '100vh',
      padding: '30px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {editing ? (
            <>
              <input
                type="text"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                style={{ padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              <button onClick={handleUsernameSave} style={{ marginLeft: '10px', padding: '8px 12px', borderRadius: '5px', background: '#8DC8E8', color: '#00205B', border: 'none', fontWeight: 'bold' }}>Save</button>
            </>
          ) : (
            <>
              <h2>Welcome back, {username} 👋</h2>
              <button onClick={() => setEditing(true)} style={{ padding: '6px 10px', marginTop: '5px', fontSize: '12px', background: 'transparent', border: '1px solid #8DC8E8', borderRadius: '5px', color: '#8DC8E8' }}>Edit Name</button>
            </>
          )}
        </div>

        {dailyVerse && (
          <div style={{
            backgroundColor: '#fff',
            color: '#00205B',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '30px',
            textAlign: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '8px' }}>📖 Daily Verse</h3>
            <p style={{ fontStyle: 'italic' }}>“{dailyVerse.text}”</p>
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>– {dailyVerse.ref}</p>
          </div>
        )}

        <h1 style={{ color: '#8DC8E8', marginBottom: '10px' }}>Athletes in Action Bible Study</h1>
        <h2 style={{ marginBottom: '10px' }}>Welcome to your 4-week reading plan.</h2>
        <h3 style={{ marginBottom: '20px' }}>📅 Progress: {completedDays} / {totalDays} days completed</h3>

        {readingPlan.map((week, weekIndex) => (
          <div key={weekIndex} style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#EAF1F8', borderBottom: '1px solid #8DC8E8', paddingBottom: '5px' }}>Week {weekIndex + 1}</h2>
            {week.map((item, dayIndex) => {
              const key = `${weekIndex}-${dayIndex}`;
              const isChecked = progress[key] || false;
              const reflectionText = reflections[key] || "";

              return (
                <div key={key} style={{
                  background: '#235789',
                  padding: '20px 15px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  borderLeft: isChecked ? '6px solid #8DC8E8' : '6px solid transparent'
                }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCheckbox(key)}
                      style={{ transform: 'scale(1.2)', cursor: 'pointer' }}
                    />
                    {item.day}:&nbsp;
                    {item.reading.includes("Reflection") ? (
                      <span>{item.reading}</span>
                    ) : (
                      <a
                        href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(item.reading)}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#EAF1F8', textDecoration: 'underline' }}
                      >
                        {item.reading}
                      </a>
                    )}
                    &nbsp;– <span style={{ fontWeight: 'normal' }}>{item.description}</span>
                  </label>

                  <textarea
                    placeholder="Write your reflection..."
                    value={reflectionText}
                    onChange={(e) => updateReflection(key, e.target.value)}
                    style={{
                      marginTop: '10px',
                      width: '100%',
                      height: '70px',
                      padding: '10px',
                      fontSize: '14px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      backgroundColor: '#fff',
                      color: '#000',
                      resize: 'none',
                      boxSizing: 'border-box' 
                    }}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
