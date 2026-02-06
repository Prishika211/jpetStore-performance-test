# jpetStore-performance-test

```md
# 🚀 End-to-End Performance Testing Framework – JPetStore (https://petstore.octoperf.com/)

This repository contains an end-to-end performance testing framework for the **JPetStore e-commerce application**, built using multiple industry-standard tools to evaluate frontend and backend performance, scalability, and user experience.

The framework covers:
- Load and stress testing
- Real user journey simulation
- Frontend performance analysis
- Core Web Vitals measurement

---

## 📌 Tools & Technologies

| Tool | Purpose |
|------|----------|
| JMeter | Load and stress testing |
| Gatling | High-concurrency performance testing |
| Puppeteer | Browser automation |
| Lighthouse | Core Web Vitals & frontend audits |
| Sitespeed.io | Web performance monitoring |
| Node.js | Automation scripting |
| Java | JMeter scripting |
| Scala | Gatling scripting |

---

## ⚙️ Test Scenarios Covered

1. Open Homepage  
2. Login  
3. Browse Categories  
4. View Product  
5. Select Item  
6. Add to Cart  
7. Checkout  
8. Payment  
9. Order Confirmation  
10. Logout  

---

## 🧪 JMeter – Load & Stress Testing

### 📁 File
```

SC01_Jpet.jmx

````

### Purpose
- Simulates concurrent users
- Performs load, stress, and endurance testing
- Measures response time, throughput, and error rate

### Features
- Thread Groups for user simulation
- HTTP Samplers for API/UI requests
- Assertions for validation
- Listeners for reporting

### Execution
```bash
jmeter -n -t SC01_Jpet.jmx -l results.jtl -e -o report
````

---

## ⚡ Gatling – High Performance Testing

### 📁 File

```
gatling-jpet.zip
```

### Purpose

* Simulates thousands of virtual users
* Evaluates system behavior under peak load
* Identifies scalability issues

### Features

* Scala-based DSL
* Scenario-based modeling
* Real-time metrics
* HTML reports

### Execution

```bash
gatling.sh -s JPetStoreSimulation
```

---

## 🌐 Lighthouse + Puppeteer – Frontend Performance Testing

### 📁 File

```
jpetStore.js
```

### Purpose

* Automates real browser interactions
* Runs Lighthouse audits on user flows
* Measures Core Web Vitals and UX metrics

### Metrics Measured

* LCP (Largest Contentful Paint)
* FCP (First Contentful Paint)
* CLS (Cumulative Layout Shift)
* TBT (Total Blocking Time)
* TTFB (Time to First Byte)

### Features

* Headless Chrome execution
* Automated login and checkout
* User flow tracing
* HTML report generation

### Execution

```bash
node jpetStore.js
```

---

## 📊 Sitespeed.io – Web Performance Monitoring

### Purpose

* Analyzes frontend performance
* Tracks page speed metrics
* Generates visual dashboards

### Metrics Tracked

* Page Load Time
* First Paint
* LCP
* CLS
* TBT
* Resource Size
* Network Requests

### Execution

```bash
sitespeed.io https://petstore.octoperf.com -n 5
```

---


## 🔍 Key Findings

* Excellent frontend performance due to lightweight pages
* Minimal JavaScript blocking
* Low page load time (< 600 ms)
* Minor gaps in caching and security headers
* TTFB variation due to backend processing

---

## 💡 Optimization Recommendations

* Enable HTTP/2
* Configure Gzip/Brotli compression
* Add Cache-Control headers
* Implement database caching
* Optimize server response handling
* Add security and privacy headers

---

## 🔄 CI/CD Integration (Optional)

These scripts can be integrated into CI/CD pipelines for continuous monitoring:

* Jenkins
* GitHub Actions
* GitLab CI
* Azure DevOps

Example:

```bash
npm run lighthouse-test
jmeter -n -t test.jmx
gatling.sh -s Simulation
```

---

## 📚 Learning Outcomes

Through this project, I gained hands-on experience in:

* Performance engineering
* Load and stress testing
* Frontend optimization
* Core Web Vitals analysis
* Automation framework design
* Report interpretation
* System scalability assessment

---

## 👩‍💻 Author

**Prishika Chaudhary**

Feel free to connect for feedback and collaboration.

---

## ⭐ If You Like This Project

If you find this repository helpful, please consider giving it a ⭐ on GitHub.


