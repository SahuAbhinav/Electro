package com.ecomm.enumeration;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum UserType {

    SUPER_ADMIN(0), STORE_ADMIN(1), DELIVERY_PARTNER(2), PLUS_MEMBER(3), MEMBER(4);

    private int value;

    private UserType(int value) {

        this.value = value;
    }

    public int value() {

        return this.value;
    }

    @JsonCreator
    public static UserType of(Integer value) {

        if (value != null) {
            for (UserType es : values()) {
                if (value.equals(es.value())) {
                    return es;
                }
            }
        }
        return null;
    }
}
