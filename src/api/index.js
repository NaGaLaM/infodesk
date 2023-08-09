import express from 'express';
import citizen from './citizen.reception.api'
import meets from './standing.commite.api';
import timestamp from './timestamp.api';
import acceptability from './acceptability.api';
import unit from './unit.api'
import faction from './faction.api';
import committee from './committee.api';
import mps from './mps.api';
import superadmin from './superadmin.api';
import auth from './auth.api'

const app = express();
app.use('/acceptability',acceptability);
app.use('/meets',meets);
app.use('/citizen', citizen);
app.use('/timestamp',timestamp);
app.use('/units',unit);
app.use('/faction',faction);
app.use('/committee',committee);
app.use('/mps',mps);
app.use('/superadmin',superadmin)
app.use('/login',auth)

export default app;
