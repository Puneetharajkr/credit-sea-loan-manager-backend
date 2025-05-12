const db = require('../models/database');

exports.submitApplication = (req, res) => {
  const { name, email, phone, amount, address, dob, pan } = req.body;
  
  if (!name || !email || !phone || !amount || !address || !dob || !pan) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const stmt = db.prepare(`
    INSERT INTO applications 
    (name, email, phone, amount, address, dob, pan, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')
  `);
  
  stmt.run(name, email, phone, amount, address, dob, pan, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ 
      message: 'Application submitted successfully', 
      id: this.lastID 
    });
  });
  stmt.finalize();
};

exports.getApplications = (req, res) => {
  const { status } = req.query;
  let query = 'SELECT * FROM applications';
  let params = [];
  
  if (status) {
    query += ' WHERE status = ?';
    params.push(status);
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.run(
    'UPDATE applications SET status = ? WHERE id = ?',
    [status, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Status updated successfully' });
    }
  );
};

exports.getStatistics = (req, res) => {
  db.serialize(() => {
    db.get('SELECT COUNT(*) AS total FROM applications', (err, total) => {
      if (err) return res.status(500).json({ error: err.message });
      
      db.get('SELECT AVG(amount) AS average FROM applications', (err, avg) => {
        if (err) return res.status(500).json({ error: err.message });
        
        db.get(`SELECT COUNT(*) AS approved FROM applications 
               WHERE status = 'approved'`, (err, approved) => {
          if (err) return res.status(500).json({ error: err.message });
          
          res.json({
            totalApplications: total.total,
            averageLoanAmount: avg.average || 0,
            applicationSuccessRate: total.total 
              ? ((approved.approved / total.total) * 100).toFixed(2)
              : 0
          });
        });
      });
    });
  });
};