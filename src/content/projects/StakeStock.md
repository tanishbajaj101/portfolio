---
date: '2026-05-01'
title: 'StakeStock — Gamified IPL Player Trading Exchange'
github: 'https://github.com/tanishbajaj101/playerstock'
external: 'https://playerstock.up.railway.app'
tech:
  - Go
  - React
  - TypeScript
  - PostgreSQL
  - Redis
  - WebSockets
showInProjects: true
---

A full-stack simulated stock exchange where users virtually trade IPL cricketers, with prices driven entirely by real user supply/demand rather than external feeds. Uses an open-source matching engine in Go for order settlement, a dedicated goroutine per traded asset for lock-free parallel trading, and real-time price/trade/order updates over WebSockets. Solved cold-start liquidity by giving out 10 free assets per account instead of bot-driven market makers. Containerized with Docker and deployed on Railway behind nginx.
