"""
Author: Cheuk-Wang Chau (Vincent)
Description: Connect/create an SQLite3 database and check/create the necessary tables.
"""

import sqlite3
from sqlite3 import Error
import os

# make_dir pathfinds db folder
def make_dir(filename):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    dest_dir = os.path.join(current_dir, "db")
    try:
        os.makedirs(dest_dir)
    except OSError:
        pass
    return os.path.join(dest_dir, filename)

def create_customer_tables():
    print("Creating/Checking customer table...")
    con = None
    try:
        write_path = os.path.join("db_sqlite", "customer.sqlite")
        con = sqlite3.connect(make_dir(write_path))
        c = con.cursor()
        read_path = os.path.join("schemas", "customer_schema.sql")
        with open(make_dir(read_path), "r") as sql_file:
            sql_script = sql_file.read()
        c.executescript(sql_script)
        con.commit()
    except Error as e:
        print(e)
        if con:
            con.close();
    finally:
        print("Customer table OK!")
        if con:
            con.close();

def create_menu_tables():
    print("Creating/Checking menu table...")
    con = None
    try:
        write_path = os.path.join("db_sqlite", "menu.sqlite")
        con = sqlite3.connect(make_dir(write_path))
        c = con.cursor()
        read_path = os.path.join("schemas", "customer_schema.sql")
        with open(make_dir(read_path), "r") as sql_file:
            sql_script = sql_file.read()
        c.executescript(sql_script)
        con.commit()
    except Error as e:
        print(e)
        if con:
            con.close();
    finally:
        print("Menu table OK!")
        if con:
            con.close();
    
def create_order_tables():
    import datetime
    print("Creating/Checking order table...")
    con = None
    write_path = None
    try:
        filename = "order_" + datetime.date.today().strftime("%b_%d_%Y") + ".sqlite"
        write_path = os.path.join("db_sqlite/orders", filename)
        con = sqlite3.connect(make_dir(write_path))
        c = con.cursor()
        read_path = os.path.join("schemas", "order_schema.sql")
        with open(make_dir(read_path), "r") as sql_file:
            sql_script = sql_file.read()
        c.executescript(sql_script)
        con.commit()
    except Error as e:
        print(e)
        if con:
            con.close();
    finally:
        print("Order table OK!")
        if con:
            con.close();
    return write_path

def create_all_tables():
    """create tables"""
    print(sqlite3.version)
    create_customer_tables()
    create_menu_tables()
    return create_order_tables()
    
