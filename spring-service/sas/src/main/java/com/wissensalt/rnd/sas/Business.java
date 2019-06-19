package com.wissensalt.rnd.sas;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * Created on 6/10/19.
 *
 * @author <a href="mailto:fauzi.knightmaster.achmad@gmail.com">Achmad Fauzi</a>
 */
@Getter
@Setter
public class Business implements Serializable {

    private String personalName;
    private String businessName;
    private String businessNumber;
}
