"""
Author: Cheuk-Wang Chau (Vincent)
Description: Connect/create an SQLite3 database and check/create the necessary tables.
"""

import sqlite3
from sqlite3 import Error
import os

def make_dir(filename):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    dest_dir = os.path.join(current_dir, "db")
    try:
        os.makedirs(dest_dir)
    except OSError:
        pass
    return os.path.join(dest_dir, filename)

def create_tables(con):
    c = con.cursor()
    with open(make_dir("schema.sql"), "r") as sql_file:
        sql_script = sql_file.read()
    c.executescript(sql_script)
    con.commit()
    con.close();

def create_connection():
    """create database connection to sqlite db"""
    con = None
    try:
        con = sqlite3.connect(make_dir("pos.sqlite"))
        print(sqlite3.version)
        create_tables(con)
    except Error as e:
        print(e)
    finally:
        if con:
            con.close()

