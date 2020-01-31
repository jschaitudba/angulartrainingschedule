using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TrainingSchedules.Models;

namespace TrainingSchedules.Controllers
{
    public class TRAINING_SCHEDULESController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/TRAINING_SCHEDULES
        public IQueryable<TRAINING_SCHEDULES> GetTRAINING_SCHEDULES()
        {
            return db.TRAINING_SCHEDULES;
        }

        // GET: api/TRAINING_SCHEDULES/5
        [ResponseType(typeof(TRAINING_SCHEDULES))]
        public IHttpActionResult GetTRAINING_SCHEDULES(int id)
        {
            TRAINING_SCHEDULES tRAINING_SCHEDULES = db.TRAINING_SCHEDULES.Find(id);
            if (tRAINING_SCHEDULES == null)
            {
                return NotFound();
            }

            return Ok(tRAINING_SCHEDULES);
        }

        // PUT: api/TRAINING_SCHEDULES/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTRAINING_SCHEDULES(int id, TRAINING_SCHEDULES tRAINING_SCHEDULES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tRAINING_SCHEDULES.TRAINING_ID)
            {
                return BadRequest();
            }

            db.Entry(tRAINING_SCHEDULES).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TRAINING_SCHEDULESExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TRAINING_SCHEDULES
        [ResponseType(typeof(TRAINING_SCHEDULES))]
        public IHttpActionResult PostTRAINING_SCHEDULES(TRAINING_SCHEDULES tRAINING_SCHEDULES)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TRAINING_SCHEDULES.Add(tRAINING_SCHEDULES);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tRAINING_SCHEDULES.TRAINING_ID }, tRAINING_SCHEDULES);
        }

        // DELETE: api/TRAINING_SCHEDULES/5
        [ResponseType(typeof(TRAINING_SCHEDULES))]
        public IHttpActionResult DeleteTRAINING_SCHEDULES(int id)
        {
            TRAINING_SCHEDULES tRAINING_SCHEDULES = db.TRAINING_SCHEDULES.Find(id);
            if (tRAINING_SCHEDULES == null)
            {
                return NotFound();
            }

            db.TRAINING_SCHEDULES.Remove(tRAINING_SCHEDULES);
            db.SaveChanges();

            return Ok(tRAINING_SCHEDULES);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TRAINING_SCHEDULESExists(int id)
        {
            return db.TRAINING_SCHEDULES.Count(e => e.TRAINING_ID == id) > 0;
        }
    }
}