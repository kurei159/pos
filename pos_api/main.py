# Author: Cheuk-Wang Chau (Vincent)
# Description: Main API script for POS System

import make_db as make_db

if __name__ == '__main__':
    order = make_db.create_all_tables()
    print("Order db path: " + order)